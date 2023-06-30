import MainLayout from "@/components/MainLayout";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
