// import "../styles/globals.css";
import "@/styles/globals.scss";
import "bootstrap/scss/bootstrap.scss";

import { AppContextProvider } from "@/context/index";
import Layout from "@/components/layout/index";
import { DefaultSeo } from "next-seo";
import { NextSeoHomePageProps } from "@/lib/seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...NextSeoHomePageProps()} />
      <AppContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContextProvider>
    </>
  );
}

export default MyApp;
