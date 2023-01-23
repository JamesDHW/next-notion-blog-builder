import { Head, Html, Main, NextScript } from "next/document";
import { Footer } from "components/common/Footer";
import { ThemeProvider } from "styles/ThemeProvider";

export default function Document() {
  return (
    <Html lang="en" className="h-full">
      <Head />
      <body className="flex flex-col justify-between h-full max-w-3xl m-auto bg-white dark:bg-gray-900">
        <ThemeProvider attribute="class">
          <div className="flex flex-col justify-center">
            <Main />
          </div>
          <Footer />
        </ThemeProvider>
        <NextScript />
      </body>
    </Html>
  );
}
