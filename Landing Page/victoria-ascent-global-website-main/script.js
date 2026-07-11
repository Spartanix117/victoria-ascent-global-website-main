// ============ REVEAL ON SCROLL ============
const revealEls = document.querySelectorAll('.reveal, .reveal-delay-1, .reveal-delay-2, .reveal-delay-3, .benefcios-reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach((el) => observer.observe(el));

// ============ CUSTOM CURSOR ============
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
if (cursor && cursorRing && matchMedia('(hover: hover)').matches) {
  window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorRing.style.left = e.clientX + 'px';
    cursorRing.style.top = e.clientY + 'px';
  });
}

// ============ MOBILE MENU ============
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
    menuToggle.classList.toggle('open');
  });
}

// ============ CONTACT FORM -> WHATSAPP ============
const WHATSAPP_NUMBER = '524499115546';
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const interesEl = document.getElementById('interes');
    const interes = interesEl ? interesEl.value : 'productos';
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !telefono) {
      alert('Por favor completa tu nombre y teléfono.');
      return;
    }

    const frases = {
      productos: 'Hola Victoria, me interesa conocer los productos Royal Prestige.',
      negocio: 'Hola Victoria, me interesa la oportunidad de negocio.',
      ambos: 'Hola Victoria, me interesan tanto los productos como la oportunidad de negocio.'
    };

    let texto = `${frases[interes] || frases.productos}\n`;
    texto += `Nombre: ${nombre}\n`;
    texto += `Teléfono: ${telefono}`;
    if (mensaje) texto += `\n${mensaje}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  });
}

// ============ IMAGE PLACEHOLDER FALLBACK ============
// Si una imagen no carga (foto todavía no subida al proyecto),
// se reemplaza por un bloque de color con el texto del "alt" para no mostrar el ícono roto.
document.querySelectorAll('img').forEach((img) => {
  img.addEventListener('error', function handler() {
    const div = document.createElement('div');
    div.className = 'img-placeholder';
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.minHeight = this.closest('.hero-visual, .victoria-foto, .producto-img, .oportunidad-visual') ? '220px' : '48px';
    div.textContent = this.alt || 'Imagen pendiente';
    this.replaceWith(div);
  }, { once: true });
});