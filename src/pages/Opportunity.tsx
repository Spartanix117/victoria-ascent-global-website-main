import React from 'react'

export default function Opportunity(){
  return (
    <main>
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Oportunidad de Negocio</h1>
          <p className="page-subtitle">Descubre cómo unirte al equipo y construir tu negocio propio.</p>
        </div>
      </header>

      <section id="oportunidad" className="container" style={{ marginTop: 40 }}>
        <div className="oportunidad-grid">
          <div className="oportunidad-text">
            <p className="section-label">Únete al equipo</p>
            <h2 className="section-title">Tu vida puede cambiar hoy<br/><em>Descubre la oportunidad de negocio</em></h2>
            <div className="gold-line"></div>
            <p style={{ color: 'var(--gris-claro)' }}>
              Únete a nuestro equipo de distribuidores independientes con Victoria Ascent Global, y construye un negocio propio con el respaldo de una marca internacional.
            </p>
            <div style={{ marginTop: 20 }}>
              <a href="/contacto" className="btn-primary">Contáctanos</a>
            </div>
          </div>

          <div className="oportunidad-visual">
            <img src="/assets/Oportunidad-de-negocio/Oportunidad-de-negocio.png" alt="Oportunidad de negocio" style={{ borderRadius: 8, width: '100%' }} />
          </div>
        </div>
      </section>
    </main>
  )
}
