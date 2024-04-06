import { Html, Head, Main, NextScript } from "next/document";

import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen min-w-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
        <Main />
        <NextScript />
        {/* This script has beforeInteractive to be applied before hydrating the page */}
        <Script id="dark-mode-status" strategy="beforeInteractive">
          {`const isDarkModeActive = Boolean(localStorage.getItem("isDarkModeActive"))
            if (isDarkModeActive) document.documentElement.classList.add("dark")`}
        </Script>
      </body>
    </Html>
  );
}
