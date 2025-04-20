import Picture from '@/components/Picture'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="error-page">
      <div className="container">
        <div className="error-page__content">
          <h1 className="error-page__404">
            404
            <Picture src="/images/resources/404.png" alt="404 error" />
          </h1>
          <h4 className="error-page__title">Oops! Pagina no encontrada</h4>
          <p className="error-page__text">La pagina que estas viendo no existe.</p>
          <Link href="/" className="ogency-btn">Inicio</Link>
        </div>
      </div>
    </section>
  )
}