import React from 'react'
import styles from './ProductCard.module.css'

export default function ProductCard({ title, description, img }: { title: string; description: string; img: string }){
  return (
    <article className={`${styles.card} producto-card`}>
      <div className={`${styles.img} producto-img`}>
        <img src={img} alt={title} />
      </div>
      <div className={`${styles.info} producto-info`}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  )
}
