// ============================
// CURSOR PERSONALIZADO
// ============================
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

if (cursor && cursorRing && window.matchMedia('(min-width: 1025px)').matches) {
    window.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        cursorRing.style.left = `${e.clientX}px`;
        cursorRing.style.top = `${e.clientY}px`;
    });
}

// ============================
// MENÚ HAMBURGUESA
// ============================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

}

// ============================
// SCROLL SUAVE PARA ENLACES INTERNOS
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        const href = this.getAttribute('href');

        if (href.length > 1) {

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

            }

        }

    });

});

// ============================
// ANIMACIONES REVEAL
// ============================
const revealSelectors =
'.reveal, .reveal-delay-1, .reveal-delay-2, .reveal-delay-3, .benefcios-reveal';

const revealElements = document.querySelectorAll(revealSelectors);

if (revealElements.length) {

    const revealObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => revealObserver.observe(el));

}

// ============================
// BARRA DE PROGRESO DE SCROLL
// ============================
const progressBar = document.querySelector('.progress');

if (progressBar) {

    window.addEventListener('scroll', () => {

        const total =
            document.documentElement.scrollHeight - window.innerHeight;

        const porcentaje = (window.scrollY / total) * 100;

        progressBar.style.width = `${porcentaje}%`;

    });

}

// ============================
// EFECTO PARALLAX EN HERO
// ============================
const heroImage = document.querySelector('.hero-visual img');

if (heroImage) {

    window.addEventListener('scroll', () => {

        const desplazamiento = window.scrollY * 0.15;

        heroImage.style.transform =
            `translateY(${desplazamiento}px)`;

    });

}

// ============================
// EFECTO 3D EN TARJETAS
// ============================
document.querySelectorAll('.producto-card').forEach(card => {

    card.addEventListener('mousemove', (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 18;
        const rotateX = ((y / rect.height) - 0.5) * -18;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-8px)
        `;

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform =
            'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';

    });

});

// ============================
// MENÚ ACTIVO SEGÚN LA SECCIÓN
// ============================
const sections = document.querySelectorAll('section[id]');
const menuLinks = document.querySelectorAll('.nav-links a');

if (sections.length && menuLinks.length) {

    window.addEventListener('scroll', () => {

        let current = '';

        sections.forEach(section => {

            const top = section.offsetTop - 140;
            const height = section.offsetHeight;

            if (
                window.scrollY >= top &&
                window.scrollY < top + height
            ) {

                current = section.getAttribute('id');

            }

        });

        menuLinks.forEach(link => {

            link.classList.remove('active');

            if (link.getAttribute('href') === `#${current}`) {

                link.classList.add('active');

            }

        });

    });

}

// ============================
// FORMULARIO -> WHATSAPP
// ============================
const contactForm = document.getElementById('contactForm');

if (contactForm) {

    contactForm.addEventListener('submit', (e) => {

        e.preventDefault();

        const nombre =
            document.getElementById('nombre').value.trim();

        const telefono =
            document.getElementById('telefono').value.trim();

        const mensaje =
            document.getElementById('mensaje')
            ? document.getElementById('mensaje').value.trim()
            : '';

        const interesEl =
            document.getElementById('interes');

        const interes =
            interesEl
            ? interesEl.options[interesEl.selectedIndex].text
            : '';

        const numeroWhatsApp = '524499115546';
        let texto = `Hola Victoria, mi nombre es ${nombre}.`;

        texto += `%0A%0ATeléfono: ${telefono}`;

        if (interes) {
            texto += `%0AInterés: ${interes}`;
        }

        if (mensaje) {
            texto += `%0A%0AMensaje:%0A${encodeURIComponent(mensaje)}`;
        }

        texto += `%0A%0AQuedo atento(a) a tu respuesta. ¡Muchas gracias!`;

        const url =
            `https://wa.me/${numeroWhatsApp}?text=${texto}`;

        window.open(url, '_blank');

        contactForm.reset();

    });

}

/* ==========================================================
   Modal "Sartenes que contaminan"
   Archivo separado — enlázalo en index.html DESPUÉS de definir
   el HTML del modal (antes de </body>)
   ========================================================== */

function pmOpenModal() {
    document.getElementById('pmModalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function pmCloseModal() {
    document.getElementById('pmModalOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

function pmCloseOnOverlay(e) {
    if (e.target.id === 'pmModalOverlay') pmCloseModal();
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') pmCloseModal();
});

// ============================
// SCRIPT CARGADO
// ============================
console.log('✅ Victoria Ascent Global — script cargado correctamente');
