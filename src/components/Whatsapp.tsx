"use client"
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Whatsapp = () => {
  return (
    <FloatingWhatsApp
      phoneNumber={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ""}
      accountName='MPM Marketing Experiencial'
      chatMessage='¡Hola! 👋 ¿En qué podemos ayudarte? Escríbenos y te responderemos lo antes posible. 😊'
      statusMessage='Estamos en línea...'
      chatboxHeight={400}
    />
  )
}

export default Whatsapp

