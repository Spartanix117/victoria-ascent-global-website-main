import React from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact(){
  return (
    <main>
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Contacto</h1>
          <p className="page-subtitle">Escríbenos y nos pondremos en contacto contigo.</p>
        </div>
      </header>

      <section id="contacto" className="container" style={{ marginTop: 40 }}>
        <div className="contacto-grid">
          <div>
            <h3>Canales de contacto</h3>
            <div className="contacto-info-card">
              <div className="icono">📱</div>
              <div>
                <h4>WhatsApp</h4>
                <p>+52 449 911 5546</p>
              </div>
            </div>

            <div className="contacto-info-card">
              <div className="icono">✉️</div>
              <div>
                <h4>Email</h4>
                <p>victoriavallejogamez@gmail.com</p>
              </div>
            </div>

          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
