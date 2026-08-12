import React, { useState } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm(){
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  function sendWhatsApp(e: React.FormEvent){
    e.preventDefault()
    const text = encodeURIComponent(`Hola, soy ${name} (${phone}). ${message}`)
    const url = `https://wa.me/524499115546?text=${text}`
    window.open(url, '_blank')
  }

  return (
    <form className={`${styles.form} contacto-form`} onSubmit={sendWhatsApp}>
      <div className={styles.formGroup}>
        <label>Nombre</label>
        <input className={styles.input} value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div className={styles.formGroup}>
        <label>Teléfono</label>
        <input className={styles.input} value={phone} onChange={e => setPhone(e.target.value)} required />
      </div>
      <div className={styles.formGroup}>
        <label>Mensaje</label>
        <textarea className={styles.input} value={message} onChange={e => setMessage(e.target.value)} />
      </div>
      <button type="submit" className={`${styles.submit} btn-whatsapp-submit`}>Enviar por WhatsApp</button>
      <p className="form-note">Abriremos WhatsApp con tu mensaje para facilitar el contacto.</p>
    </form>
  )
}
