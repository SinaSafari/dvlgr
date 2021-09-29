import { ConfigProvider } from "antd";
import faIR from "antd/lib/locale/fa_IR";
import { AppContextProvider } from "@/context/index";
import GlobalLayout from "@/components/layout/index";
import { Provider as NextAuthProvider } from "next-auth/client";

//Style
import "antd/dist/antd.min.css";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ConfigProvider locale={faIR} direction="rtl">
        <AppContextProvider>
          <GlobalLayout>
            <Component {...pageProps} />
          </GlobalLayout>
        </AppContextProvider>
      </ConfigProvider>
    </NextAuthProvider>
  );
};

export default MyApp;
