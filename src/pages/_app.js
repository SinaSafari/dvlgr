// import "../styles/globals.css";
import "@/styles/globals.scss";
import "bootstrap/scss/bootstrap.scss";

import { AppContextProvider } from "@/context/index";
import Layout from "@/components/layout/index";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}

export default MyApp;
