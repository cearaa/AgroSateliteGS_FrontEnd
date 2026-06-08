/* main.js — AgroSatélite */

/* MENU HAMBÚRGUER */
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', isOpen);
    });

    /* Fecha o menu ao clicar em qualquer link */
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

/* BOTÃO VOLTAR AO TOPO */
const backTop = document.getElementById('backToTop');

if (backTop) {
    window.addEventListener('scroll', () => {
        backTop.classList.toggle('show', window.scrollY > 300);
    });

    backTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ACCORDION FAQ */
document.querySelectorAll('.accordion-header').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.accordion-item');
        const isOpen = item.classList.contains('open');

        /* Fecha todos os itens abertos */
        document.querySelectorAll('.accordion-item.open').forEach(el => {
            el.classList.remove('open');
            el.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
        });

        /* Abre o clicado se estava fechado */
        if (!isOpen) {
            item.classList.add('open');
            btn.setAttribute('aria-expanded', 'true');
        }
    });
});

/* VALIDAÇÃO — FORMULÁRIO DE CONTATO */
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome    = document.getElementById('nome');
        const email   = document.getElementById('email');
        const assunto = document.getElementById('assunto');
        const mensagem = document.getElementById('mensagem');
        const feedback = document.getElementById('feedbackContato');
        let valid = true;

        /* Limpa erros anteriores */
        [nome, email, assunto, mensagem].forEach(field => {
            const errEl = field.parentElement.querySelector('.field-error');
            if (errEl) errEl.textContent = '';
            field.style.borderColor = '';
        });

        const showError = (field, msg) => {
            const errEl = field.parentElement.querySelector('.field-error');
            if (errEl) errEl.textContent = msg;
            field.style.borderColor = 'var(--danger)';
            valid = false;
        };

        if (!nome.value.trim()) showError(nome, 'Informe o seu nome.');
        if (!email.value.includes('@') || !email.value.includes('.')) showError(email, 'Informe um e-mail válido.');
        if (assunto && !assunto.value.trim()) showError(assunto, 'Informe o assunto.');
        if (!mensagem.value.trim()) showError(mensagem, 'Escreva uma mensagem.');

        if (!valid) return;

        feedback.className = 'feedback-msg success';
        feedback.textContent = '✓ Mensagem enviada com sucesso! Entraremos em contato em breve.';
        contactForm.reset();

        /* Remove feedback após 5 s */
        setTimeout(() => { feedback.textContent = ''; feedback.className = ''; }, 5000);
    });
}

/* DASHBOARD — CONSULTA AGRÍCOLA */
const consultaForm = document.getElementById('consultaForm');

if (consultaForm) {
    consultaForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const regrasValidacao = [
            { id: 'nomeFazenda', mensagem: 'É necessário o nome da fazenda.' },
            { id: 'tipoCultura', mensagem: 'Por favor, selecione uma cultura.' },
            { id: "diasPlantio", mensagem:'Por favor, digite quantos dias desde o plantio.'},
            { id: "umidade", mensagem: 'Por favor, digite a umidade do local.'},
            { id: "temperatura", mensagem: 'Por favor, digite a temperatura do local.'},
            { id: "ndvi", mensagem: 'Por favor, digite a NDVI.'},

        ];
        let formValido = true;
        regrasValidacao.forEach(regra => {
            const campo = document.getElementById(regra.id);
            const spanErro = campo.parentElement.querySelector('.field-error');
            campo.classList.remove('input-error');
            if (spanErro) spanErro.textContent = '';
            if (campo.value.trim() === '') {
                campo.classList.add('input-error');
                if (spanErro) spanErro.textContent = regra.mensagem;
                formValido = false;
            }
        });
        const campoNdvi = document.getElementById('ndvi');
        if (campoNdvi) {
            const valorNdvi = parseFloat(campoNdvi.value);
            if (campoNdvi.value.trim() !== '' && (valorNdvi < 0 || valorNdvi > 1)) {
                campoNdvi.classList.add('input-error');
                const spanErro = campoNdvi.parentElement.querySelector('.field-error');
                if (spanErro) spanErro.textContent = 'O valor do NDVI deve ser entre 0 e 1.';
                formValido = false;
            }
        }
        if (!formValido) {
            return;
        }
        const btnSubmit = consultaForm.querySelector('button[type="submit"]');
        const textoOriginal = btnSubmit.innerHTML;
        btnSubmit.disabled = true;
        btnSubmit.classList.add('loading');
        btnSubmit.innerHTML = 'Estamos conectando aos satélites, aguarde';
        setTimeout(() => {
            processarConsulta();
            btnSubmit.disabled = false;
            btnSubmit.classList.remove('loading');
            btnSubmit.innerHTML = textoOriginal;
        }, 1500);
    });
}
function processarConsulta() {
    /* Coleta os valores do formulário */
    const fazenda       = document.getElementById('nomeFazenda')?.value || '—';
    const cultura       = document.getElementById('tipoCultura')?.value || '—';
    const diasPlantio   = parseInt(document.getElementById('diasPlantio')?.value) || 0;
    const umidade       = parseFloat(document.getElementById('umidade')?.value) || 0;
    const temperatura   = parseFloat(document.getElementById('temperatura')?.value) || 0;
    const ndvi          = parseFloat(document.getElementById('ndvi')?.value) || 0;
    const irrigada      = document.getElementById('irrigada')?.value === 'sim';
    const producao      = parseFloat(document.getElementById('producao')?.value) || 0;
    const precoSaca     = parseFloat(document.getElementById('precoSaca')?.value) || 0;

    /* Limites mínimos por cultura (dias, NDVI mín, umidade ideal) */
    const limites = {
        soja:   { diasMin: 100, ndviMin: 0.6, umidadeMin: 60 },
        milho:  { diasMin: 110, ndviMin: 0.55, umidadeMin: 55 },
        trigo:  { diasMin: 90,  ndviMin: 0.5,  umidadeMin: 50 },
        arroz:  { diasMin: 120, ndviMin: 0.58, umidadeMin: 70 },
        feijao: { diasMin: 80,  ndviMin: 0.5,  umidadeMin: 55 },
    };

    const limite = limites[cultura] || { diasMin: 90, ndviMin: 0.5, umidadeMin: 55 };

    /* Decisão de prontidão */
    const diasOk    = diasPlantio >= limite.diasMin;
    const ndviOk    = ndvi >= limite.ndviMin;
    const umidadeOk = umidade >= limite.umidadeMin;
    const tempOk    = temperatura >= 15 && temperatura <= 35;

    let status, statusClass, statusMsg;

    const score = [diasOk, ndviOk, umidadeOk, tempOk].filter(Boolean).length;
    const motivosPendentes = [];
    if (!diasOk) motivosPendentes.push(`Faltam dias de plantio (Mínimo: ${limite.diasMin}).`);
    if (!ndviOk) motivosPendentes.push(`O NDVI atual (${ndvi}) está abaixo do ideal (${limite.ndviMin}).`);
    if (!umidadeOk) motivosPendentes.push(`A umidade (${umidade}%) está abaixo do necessário (${limite.umidadeMin}%).`);
    if (!tempOk) motivosPendentes.push(`A temperatura (${temperatura}°C) está fora da faixa segura (15°C - 35°C).`);
    if (score === 4) {
        status      = '✓ PRONTO PARA COLHEITA';
        statusClass = 'pronto';
        statusMsg   = 'Todos os indicadores apontam condições ideais. Você pode iniciar a colheita.';
    } else if (score >= 2) {
        status      = '⏳ AGUARDAR MAIS UM POUCO';
        statusClass = 'aguardar';
        statusMsg   = `Acompanhe nos próximos dias. Pontos de atenção: ${motivosPendentes.join(' ')}`;
    } else {
        status      = '⚠ ATENÇÃO — CONDIÇÕES ADVERSAS';
        statusClass = 'atencao';
        statusMsg   = `Risco na lavoura! Fatores críticos: ${motivosPendentes.join(' ')}`;
    }

    /* Preenche a área de resultado */
    document.getElementById('resultFazenda').textContent   = fazenda;
    document.getElementById('resultCultura').textContent   = cultura.charAt(0).toUpperCase() + cultura.slice(1);
    document.getElementById('resultDias').textContent      = diasPlantio;
    document.getElementById('resultUmidade').textContent   = umidade;
    document.getElementById('resultTemp').textContent      = temperatura;
    document.getElementById('resultNdvi').textContent      = ndvi.toFixed(2);
    document.getElementById('resultIrrigada').textContent  = irrigada ? 'Sim' : 'Não';
    document.getElementById('resultProducao').textContent  = producao.toFixed(1);
    document.getElementById('resultPreco').textContent     = precoSaca.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const receita = producao * precoSaca;
    document.getElementById('resultReceita').textContent = receita > 0
    ? receita.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    : '—';

    /* Status badge */
    const badge = document.getElementById('statusBadge');
    badge.textContent  = status;
    badge.className    = `status-badge ${statusClass}`;

    document.getElementById('statusMsg').textContent = statusMsg;

    /* Barra NDVI — usa CSS custom property, evitando style inline */
    const ndviPct = Math.min(Math.max(ndvi * 100, 0), 100);
    const ndviFill = document.getElementById('ndviFill');
    if (ndviFill) {
        ndviFill.style.setProperty('--ndvi-pct', `${ndviPct}%`);
    }
    const ndviValorEl = document.getElementById('ndviValorDisplay');
    if (ndviValorEl) ndviValorEl.textContent = ndvi.toFixed(2);

    /* Mostra a área de resultado */
    const resultArea = document.getElementById('resultadoArea');
    if (resultArea) {
        resultArea.classList.add('visible');
        resultArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
