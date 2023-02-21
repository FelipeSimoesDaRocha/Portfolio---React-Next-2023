// Next
import Head from "next/head";
import type { AppProps } from "next/app";
import { useEffect } from "react";

// Styles
import "../styles/globals.css"

// Translate
import "../i18nextInit";

// Vercel-Analytics
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (localStorage.i18nextLng) {
      localStorage.setItem("i18nextLng", "pt");
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Felipe Rocha</title>
        <meta name="theme-color" content="#646464" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="google-site-verification" content="1Vi5CDNpLH7dXyXdcGFFVBRNG5g7Rdk9_m7y9s0PszE" />
        <meta name="description" content="Portfólio de Felipe Simões Da Rocha" />

        <link rel="apple-touch-icon" sizes="180x180" href="../../public/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../../public/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../../public/icons/favicon-16x16.png" />
        <link href="https://felipe-rocha.vercel.app/" rel="canonical" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Felipe Rocha - Developer Front-End" />
        <meta property="og:image" content="" />
        <meta property="og:Github" content="https://github.com/FelipeSimoesDaRocha" />
        <meta property="og:Linkedin" content="https://www.linkedin.com/in/felipe-sim%C3%B5es-da-rocha/" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
