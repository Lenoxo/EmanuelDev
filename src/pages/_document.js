import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen min-w-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
