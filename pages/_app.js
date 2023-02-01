import "../styles/globals.scss";
import Head from "next/head";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>{"shehan.is"}</title>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
        <meta
          name="description"
          content="Shehan Dinuka is a Software Engineer Specilalized on front end development, He has obtained more than 4 years of experience developing web application from e-commerse to NFT based."
        />
        <meta
          name="keywords"
          content="Shehan Dinuka, Frontend developer, React Developer"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
  return;
}

export default MyApp;
