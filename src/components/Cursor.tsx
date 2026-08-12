import React, { useEffect, useState } from 'react'
import './cursor.css'

export default function Cursor(){
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 })

  useEffect(() => {
    function onMove(e: MouseEvent){
      const x = e.clientX
      const y = e.clientY
      setPos({ x, y })
      setRingPos({ x, y })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div
        className="va-cursor"
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
        aria-hidden
      />
      <div
        className="va-cursor-ring"
        style={{ transform: `translate(${ringPos.x}px, ${ringPos.y}px)` }}
        aria-hidden
      />
    </>
  )
}
