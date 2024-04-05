import MainLayout from "@/components/MainLayout";
import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const isDarkModeActive = Boolean(localStorage.getItem("isDarkModeActive"));
    if (isDarkModeActive) {
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
