import React from 'react'

export default function TestimonialCard({ quote, author }: { quote: string; author: string }){
  return (
    <div className="testimonio-card">
      <p>"{quote}"</p>
      <span>- {author}</span>
    </div>
  )
}
