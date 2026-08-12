import React from 'react'
import { Link } from 'react-router-dom'

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
            <li><Link to="/" className="active">Inicio</Link></li>
            <li><Link to="/acerca-de-nosotros">Acerca de Nosotros</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/oportunidad">Oportunidad de Negocio</Link></li>
            <li><Link to="/testimonios">Testimonios</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
          <Link to="/oportunidad" className="btn-nav">Únete al Equipo</Link>
        </div>
      </div>
    </nav>
  )
}
