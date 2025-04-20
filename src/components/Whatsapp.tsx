"use client"
import { WHATSAPP_NUMBER } from '@/db/general'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Whatsapp = () => {
  return (
    <FloatingWhatsApp
      phoneNumber={WHATSAPP_NUMBER ?? ""}
      accountName='MPM Marketing'
      chatMessage='¡Hola! 👋 ¿En qué podemos ayudarte? Escríbenos y te responderemos lo antes posible. 😊'
      statusMessage='Estamos en línea...'
      chatboxHeight={350}
    />
  )
}

export default Whatsapp

