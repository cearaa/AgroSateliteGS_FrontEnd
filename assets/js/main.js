/* ============================================================
   MAIN.JS — AgroSatélite
   Interatividade global: menu hambúrguer, back-to-top,
   accordion FAQ, validação do formulário de contato,
   e lógica do dashboard de consulta agrícola.
   ============================================================ */

/* ---- 1. MENU HAMBÚRGUER ---- */
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

/* ---- 2. BOTÃO VOLTAR AO TOPO ---- */
const backTop = document.getElementById('backToTop');

if (backTop) {
    window.addEventListener('scroll', () => {
        backTop.classList.toggle('show', window.scrollY > 300);
    });

    backTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ---- 3. ACCORDION FAQ ---- */
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

/* ---- 4. VALIDAÇÃO — FORMULÁRIO DE CONTATO ---- */
const contactForm = document.getElementById('contactForm');

