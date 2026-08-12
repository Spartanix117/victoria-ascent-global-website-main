import React from 'react'

export default function Navbar(){
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src="/assets/Logo/Premium.png" alt="Victoria Ascent Global" className="logo-img" />
          <div className="logo-text">
            <span className="logo-name">Victoria Ascent Global</span>
            <span className="logo-tagline">Distribuidora Independiente</span>
          </div>
        </div>
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="/" className="active">Inicio</a></li>
            <li><a href="/acerca-de-nosotros">Acerca de Nosotros</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/oportunidad">Oportunidad de Negocio</a></li>
            <li><a href="/testimonios">Testimonios</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
          <a href="/oportunidad" className="btn-nav">Únete al Equipo</a>
        </div>
      </div>
    </nav>
  )
}
