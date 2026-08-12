import React from 'react'
import TestimonialCard from '../components/TestimonialCard'

export default function Testimonials(){
  const items = [
    { quote: 'Al principio pensé que las ollas eran muy caras. Hoy puedo decir que valen cada peso invertido.', author: 'Marisela García' },
    { quote: 'Conocía la marca desde Estados Unidos y siempre me parecieron de buena calidad.', author: 'Josefina López' },
    { quote: 'Unirme al equipo fue la mejor decisión. La capacitación y apoyo me dieron confianza.', author: 'Carlos M.' }
  ]

  return (
    <main>
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Testimonios</h1>
          <p className="page-subtitle">Historias de éxito que inspiran</p>
        </div>
      </header>

      <section id="testimonios" className="container" style={{ marginTop: 40 }}>
        <div className="testimonios-grid">
          {items.map((it, i) => (
            <TestimonialCard key={i} quote={it.quote} author={it.author} />
          ))}
        </div>
      </section>
    </main>
  )
}
