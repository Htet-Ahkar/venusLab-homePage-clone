import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

// Layout
import { Layout } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>VenusLab-homepage-clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
