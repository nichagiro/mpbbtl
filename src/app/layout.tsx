import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// ui
import Script from "next/script";
import Footer from "@/layouts/Footer";
import Nav from "@/layouts/Nav";
import Whatsapp from "@/components/Whatsapp";
import Loading from "@/components/Loading";
import ScrollTop from "@/components/ScrollTop";
import ScriptRunner from "./ScriptRunner";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const getSocials = {
  "@context": "http://schema.org",
  "@type": "Organization",
  "name": "Overweb",
  "url": "https://overweb.com.co/",
  "address": "Cra. 4b & Cl. 46 Bis",
  "sameAs": [
    "https://www.facebook.com/mpmbtlsas/",
    "https://www.instagram.com/mpmbtl",
    "https://es.pinterest.com/mpmbtl/",
  ]
}

export const metadata: Metadata = {
  openGraph: {
    siteName: "MPM Marketing Experiencial",
    locale: "es_CO",
    type: "website",
    countryName: "Colombia",
    url: "https://mpmbtl.com/",
    emails: "info.burbano@mpmbtl.com",
    phoneNumbers: "573001102276",
    title: "MPM Marketing Experiencial",
    description: "MPM Marketing Experiencial es una agencia que se especializa en crear experiencias memorables para marcas y consumidores.",
  },
  twitter: {
    site: "@Nicolas63783814",
    creator: "@Nicolas63783814",
    card: "summary",
  },
  authors: {
    name: "overweb",
    url: "https://overweb.com.co/"
  },
  generator: "Next.js",
  robots: {
    index: false,
    follow: false
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link href="/images/logo-light.png" rel="icon" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getSocials) }} />
      </head>

      <body className={`${plusJakartaSans.className} custom-cursor`}>
        <Loading />

        <div className="custom-cursor__cursor"></div>
        <div className="custom-cursor__cursor-two"></div>

        <Nav />

        <main className="page-wrapper">
          {children}
        </main>

        <Footer />

        <Whatsapp />
        <ScrollTop />


        <Script src="/js/jquery-3.5.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.bundle.min.js" />
        <Script src="/js/jquery-ui.js" />
        <Script src="/js/jarallax.min.js" />
        <Script src="/js/jquery.ajaxchimp.min.js" />
        <Script src="/js/jquery.appear.min.js" />
        <Script src="/js/jquery.circle-progress.min.js" />
        <Script src="/js/jquery.magnific-popup.min.js" />
        <Script src="/js/jquery.validate.min.js" />
        <Script src="/js/nouislider.min.js" />
        <Script src="/js/odometer.min.js" />
        <Script src="/js/tiny-slider.min.js" />
        <Script src="/js/owl.carousel.min.js" strategy="beforeInteractive" />
        <Script src="/js/wNumb.min.js" />
        <Script src="/js/jquery.circleType.js" />
        <Script src="/js/jquery.lettering.min.js" />
        <Script src="/js/wow.js" />
        <Script src="/js/isotope.js" />
        <Script src="/js/countdown.min.js" />

        <ScriptRunner />
      </body>
    </html>
  );
}
