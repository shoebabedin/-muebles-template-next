import Layout from "@/components/common/Layout";
import "@/styles/globals.css";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// slick
import { useEffect } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// Import Swiper styles
import "swiper/css";



export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
