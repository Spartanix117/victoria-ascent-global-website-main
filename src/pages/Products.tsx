import React from 'react'
import ProductCard from '../components/ProductCard'

export default function Products(){
  const products = [
    { title: 'Sistema de Cocción', description: 'Ollas y sartenes de acero grado quirúrgico que cocinan sin aceite.', img: '/assets/Productos/Sartenes-Royal-Prestige.jpg' },
    { title: 'Prestige Signature Cutlery Set', description: 'Conjunto de cubiertos de alta calidad.', img: '/assets/Productos/Prestige_Signature_Cutlery_Set.jpg' },
    { title: 'Power Blender Max', description: 'Blender de alta potencia para batidos y sopas.', img: '/assets/Productos/Power-Blender-Max-Royal-Prestige.jpg' }
  ]

  return (
    <main>
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Productos</h1>
          <p className="page-subtitle">Conoce nuestros productos destacados y el catálogo disponible.</p>
        </div>
      </header>

      <section id="productos" className="container" style={{ marginTop: 40 }}>
        <div className="productos-grid">
          {products.map(p => (
            <ProductCard key={p.title} title={p.title} description={p.description} img={p.img} />
          ))}
        </div>
      </section>
    </main>
  )
}
