import React from 'react'

type Props = {
  open: boolean
  onClose: () => void
}

export default function ProblemModal({ open, onClose }: Props){
  if(!open) return null
  return (
    <div style={overlay} role="dialog" aria-modal="true">
      <div style={modal}>
        <button onClick={onClose} style={closeButton} aria-label="Cerrar">✕</button>
        <h3>¿Por qué esto es un problema?</h3>
        <p>Cuando las superficies antiadherentes se dañan pueden liberar partículas y contaminar los alimentos. Royal Prestige ofrece soluciones duraderas y seguras para cocinar.</p>
        <div style={{ marginTop: 18 }}>
          <a href="/productos" className="btn-primary">Ver la solución</a>
        </div>
      </div>
    </div>
  )
}

const overlay: React.CSSProperties = {
  position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
  background: 'rgba(0,0,0,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10000
}
const modal: React.CSSProperties = {
  background: '#fff', padding: 24, borderRadius: 8, maxWidth: 720, width: 'min(92%, 720px)', boxShadow: '0 10px 40px rgba(0,0,0,0.2)', color: '#0B2A4A'
}
const closeButton: React.CSSProperties = { position: 'absolute', right: 12, top: 12, border: 'none', background: 'transparent', fontSize: 18, cursor: 'pointer' }
