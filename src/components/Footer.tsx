import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="footer-logo">Victoria Ascent Global</span>
          <p>Distribuidora independiente de Royal Prestige. Calidad que transforma vidas, oportunidad que construye futuros.</p>
        </div>
        <div className="footer-links">
          <h4>Navegación</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/acerca-de-nosotros">Acerca de Nosotros</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/oportunidad">Oportunidad de Negocio</a></li>
            <li><a href="/testimonios">Testimonios</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>WhatsApp: +52 449 911 5546</p>
          <p>victoriavallejogamez@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Victoria Ascent Global. Distribuidora Independiente de Royal Prestige.</p>
      </div>
    </footer>
  )
}
