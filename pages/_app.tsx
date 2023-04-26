import type { AppProps } from "next/app";
import AuthProvider from "../providers/AuthProvider";
import ThemeProvider from "../providers/ThemeProvider";
import Layout from "../components/Layout";
import { Suspense } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<div>Something went wrong</div>}>
      <AuthProvider>
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </AuthProvider>
    </Suspense>
  );
}
