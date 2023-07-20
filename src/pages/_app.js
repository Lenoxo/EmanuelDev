import MainLayout from "@/components/MainLayout";
import { Open_Sans } from "next/font/google";
import "@/styles/globals.css";

const open_Sans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <style jsx global>{`
          html {
            font-family: ${open_Sans.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
