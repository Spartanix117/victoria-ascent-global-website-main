import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar(){
  return (
    <nav className={`${styles.navbar} navbar`}>
      <div className="container">
        <div className={`${styles.logo} logo`}>
          <img src="/assets/Logo/Premium.png" alt="Victoria Ascent Global" className={`${styles['logo-img']} logo-img`} />
          <div className={`${styles['logo-text']} logo-text`}>
            <span className={`${styles['logo-name']} logo-name`}>Victoria Ascent Global</span>
            <span className={`${styles['logo-tagline']} logo-tagline`}>Distribuidora Independiente</span>
          </div>
        </div>
        <div className={`${styles.navRight} nav-right`}>
          <ul className={`${styles.navLinks} nav-links`}>
            <li><Link to="/" className="active">Inicio</Link></li>
            <li><Link to="/acerca-de-nosotros">Acerca de Nosotros</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/oportunidad">Oportunidad de Negocio</Link></li>
            <li><Link to="/testimonios">Testimonios</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
          <Link to="/oportunidad" className={`btn-nav ${styles.btnNav}`}>Únete al Equipo</Link>
        </div>
      </div>
    </nav>
  )
}
