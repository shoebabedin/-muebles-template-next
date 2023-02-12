import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CartCanvas from "./CartCanvas";
import Footer from "./Footer";
import Header from "./Header";
import Preloader from "./Preloader";
import StickyMobileNav from "./StickyMobileNav";
import ToTopBtn from "./ToTopBtn";

const Layout = ({ children }) => {
  const [show, setShow] = useState(false);
  const location = useRouter();
  const reload = location.asPath;
  const headerFooter = ["/login", "/signup", "/check-out-process", "/comming-soon", "/forgot-password", "/verify-email", "/view-cart"]

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [reload]);

  const handleShow = () => {
    setShow(true);
  };
  return (
    <div className="main">
      <Preloader />
      {!headerFooter.includes(reload) && <Header handleShow={handleShow} />}
      {children}
      {!headerFooter.includes(reload) && <Footer />}
      <ToTopBtn />
      <StickyMobileNav handleShow={handleShow} />
      <CartCanvas show={show} setShow={setShow} />
    </div>
  );
};

export default Layout;
