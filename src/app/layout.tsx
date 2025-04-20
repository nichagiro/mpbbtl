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
import { CONTACT_NUMBER } from "@/db/general";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  keywords: ["marketing experiencial", "publicidad BTL", "activaciones de marca", "eventos corporativos", "estrategias de marketing"],
  authors: [{
    name: "overweb",
    url: "https://overweb.com.co/",
  }],
  generator: "Next.js",
  robots: {
    index: true,
    follow: true
  }
}

const structuredData = {
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MPM Marketing Experiencial",
    "url": "https://mpmbtl.com",
    "logo": "https://mpmbtl.com/logo-light.webp",
    "description": "Agencia de marketing experiencial en Colombia. Creamos estrategias memorables, activaciones de marca y publicidad móvil que conectan con tu audiencia.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Cra. 18 #10-31",
      "addressLocality": "Cali",
      "addressRegion": "Valle del Cauca",
      "addressCountry": "CO"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": CONTACT_NUMBER,
      "contactType": "customer service",
      "areaServed": "CO",
      "availableLanguage": ["Spanish"]
    },
    "sameAs": [
      "https://www.facebook.com/mpmbtlsas/",
      "https://www.instagram.com/mpmbtl",
      "https://es.pinterest.com/mpmbtl/"
    ]
  })
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link href="/favicon.png" rel="icon" />
        <script type="application/ld+json" dangerouslySetInnerHTML={structuredData} />
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
