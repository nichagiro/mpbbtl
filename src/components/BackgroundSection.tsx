import Link from 'next/link';
import { FC } from 'react'

const defaultLink = {
  url: "/",
  title: "Home"
}

interface Links {
  url: string
  title: string
}

interface BackgroundSectionProps {
  title: string;
  links: Links[]
}

const BackgroundSection: FC<BackgroundSectionProps> = ({ title, links = [] }) => {
  return (
    <section className="page-header">
      <div className="page-header__bg"></div>
      <div className="page-header__overlay"></div>
      <div className="container">
        <ul className="page-header__breadcrumb list-unstyled">
          {
            [defaultLink, ...links].map(item => (
              <li key={item.title}>
                <Link href={item.url} title={item.title}>
                  {item.title}
                </Link>
              </li>
            ))
          }
        </ul>
        <h2 className="page-header__title">{title}</h2>
      </div>
    </section>
  )
}

export default BackgroundSection