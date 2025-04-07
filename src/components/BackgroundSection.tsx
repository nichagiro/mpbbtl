import Link from 'next/link';
import { FC } from 'react'

interface BackgroundSectionProps {
  title: string;
}

const BackgroundSection: FC<BackgroundSectionProps> = ({ title }) => {
  return (
    <section className="page-header">
      <div className="page-header__bg"></div>
      <div className="page-header__overlay"></div>
      <div className="container">
        <ul className="page-header__breadcrumb list-unstyled">
          <li>
            <Link href="/" title='inicio'>Home</Link>
          </li>
          <li>
            <Link href={"/servicios"} title='servicios'>Servicios</Link>
          </li>
        </ul>
        <h2 className="page-header__title">{title}</h2>
      </div>
    </section>
  )
}

export default BackgroundSection