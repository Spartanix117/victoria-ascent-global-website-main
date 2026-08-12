import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div>
      <Navbar />

      <main>
        <section id="hero">
          <div className="container hero-inner">
            <div className="hero-content">
              <p className="hero-eyebrow">Distribuidora Independiente · Royal Prestige</p>
              <h1 className="hero-title">Victoria<br/><em>Ascent Global</em></h1>
              <div className="hero-divider" />
              <p className="hero-subtitle">Calidad que transforma vidas · Oportunidad que construye futuros</p>
              <div className="hero-btns">
                <a href="/productos" className="btn-primary">Ver Productos ›</a>
                <a href="/oportunidad" className="btn-secondary">Únete al Equipo</a>
              </div>
            </div>
            <div className="hero-visual reveal">
              <img src="/Landing Page/victoria-ascent-global-website-main/img/Productos/Sartenes Royal Prestige.jpg" alt="Cocina moderna con Royal Prestige" />
            </div>
          </div>
        </section>

        {/* Minimal sections ported for initial migration; we'll split into components in follow-up commits */}

      </main>

      <Footer />
    </div>
  )
}
