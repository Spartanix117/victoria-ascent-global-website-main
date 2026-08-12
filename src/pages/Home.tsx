import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useReveal from '../hooks/useReveal'
import ProblemModal from '../components/ProblemModal'

export default function Home(){
  const [pmOpen, setPmOpen] = useState(false)
  useReveal()

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
              <img src="/assets/Productos/Sartenes-Royal-Prestige.jpg" alt="Cocina moderna con Royal Prestige" />
            </div>
          </div>
        </section>

        <section id="problema">
          <div className="container">
            <p className="section-label" style={{ textAlign: 'center' }}>¿Te identificas?</p>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Lo que muchas familias<br/><em>no saben que están viviendo</em></h2>
            <div className="gold-line" style={{ margin: '1.5rem auto 3rem' }}></div>

            <div className="problema-grid">
              <div className="problema-item reveal clickable problema-destacado" id="pmCard" onClick={() => setPmOpen(true)}>
                <img src="/assets/Problema/Contaminantes.png" alt="Microplásticos en sartenes antiadherentes" className="problema-img" />
                <div className="problema-contenido">
                  <span className="problema-badge">⚠️ ¡PELIGRO EN TU SARTÉN!</span>
                  <h3>¿Sabías que tu sartén podría estar contaminando tus alimentos?</h3>
                  <p>Un solo rasguño en una sartén antiadherente puede liberar <strong>hasta 9,000 partículas microplásticas</strong>.</p>
                  <span className="problema-link">Descubre por qué sucede →</span>
                </div>
              </div>

              <div className="problema-item reveal-delay-1">
                <span className="problema-icon">💸</span>
                <h3>Gastar más cocinando más</h3>
                <p>Aceite, tiempo y nutrientes perdidos en cada comida. Los utensilios incorrectos cuestan más de lo que crees.</p>
              </div>

              <div className="problema-item reveal-delay-2">
                <span className="problema-icon">🔄</span>
                <h3>Cambiar utensilios cada año</h3>
                <p>Comprar barato sale caro. Un sistema de calidad dura décadas y se paga solo.</p>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />

      <ProblemModal open={pmOpen} onClose={() => setPmOpen(false)} />
    </div>
  )
}
