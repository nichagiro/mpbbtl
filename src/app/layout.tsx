import type { Metadata } from "next";
import { Montserrat, Sarabun } from 'next/font/google'
import "./globals.css";

// ui
import Footer from "@/layouts/Footer";
import Nav from "@/layouts/Nav";
import Whatsapp from "@/components/Whatsapp";
import Loading from "@/components/Loading";
import ScrollTop from "@/components/ScrollTop";

// others
import Script from "next/script";
import ScriptRunner from "./ScriptRunner";


const montserrat = Montserrat({
  weight: ['700'], // Bold
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const sarabun = Sarabun({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-sarabun',
})

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link href="/favicon.png" rel="icon" />
      </head>
      <body className={`${montserrat.variable} ${sarabun.variable} custom-cursor`}>
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
