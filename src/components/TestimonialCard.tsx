import React from 'react'
import styles from './TestimonialCard.module.css'

export default function TestimonialCard({ quote, author }: { quote: string; author: string }){
  return (
    <div className={`${styles.card} testimonio-card`}>
      <p className={styles.quote}>"{quote}"</p>
      <span className={styles.author}>- {author}</span>
    </div>
  )
}
