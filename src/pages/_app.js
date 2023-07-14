import MainLayout from "@/components/MainLayout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
