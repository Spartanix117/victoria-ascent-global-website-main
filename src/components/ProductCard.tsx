import React from 'react'

export default function ProductCard({ title, description, img }: { title: string; description: string; img: string }){
  return (
    <article className="producto-card">
      <div className="producto-img">
        <img src={img} alt={title} />
      </div>
      <div className="producto-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}
