import Link from "next/link";
import { useEffect, useState } from "react";

const Header = (props) => {
  const [scrollPosition, setPosition] = useState({ scrollY: 0 });

  useEffect(() => {
    function updatePosition() {
      setPosition({ scrollY: window.scrollY });
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <>
      <section
        id="top_navbar"
        className={scrollPosition.scrollY > 300 ? "sticky" : ""}
      >
        <nav className="navbar navbar-expand-lg navbar-light container-fluid">
          <div className="row flex-row align-items-center justify-content-between w-100 mx-auto">
            <div className="col-lg-3 col-md-6 col-6 py-lg-3">
              <Link className="navbar-brand me-auto" href="/">
                <img
                  src={("/assets/images/logo/logo.png")}
                  alt=""
                />
              </Link>
            </div>
            <div className="col-lg-6 col-md-6 col-6 py-lg-3">
              <div className="search desktop">
                <input
                  className="w-100"
                  type="search"
                  placeholder="Search by name, tag, category"
                />
              </div>
              <div className="d-flex align-items-center justify-content-end w-100 gap-3">
                <div
                  className="search mob_nav navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent1"
                  aria-controls="navbarSupportedContent1"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="ph-magnifying-glass"></i>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <div className="hamburger-icon" id="icon">
                    <div className="icon-1" id="a"></div>
                    <div className="icon-2" id="b"></div>
                    <div className="icon-3" id="c"></div>
                    <div className="clear"></div>
                  </div>
                </button>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="desktop py-3">
                <ul className="navbar-nav justify-content-end w-100">
                  <li className="nav-item">
                    <Link className="nav-link" href="/wishlist">
                      <i className="ph-heart"></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link border-0 bg-transparent"
                      onClick={props.handleShow}
                    >
                      <i className="ph-handbag"></i>
                    </button>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/profile">
                      <i className="ph-user"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="mob_nav py-lg-3">
                <div
                  className="collapse navbar-collapse py-3 relative"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav justify-content-center w-100">
                    {[
                      "Living Room",
                      "Bed Room",
                      "Outdoor",
                      "Dinning",
                      "Kitchen",
                      "Office",
                      "Lights & Lamps"
                    ].map((item, index) => (
                      <li key={index} className="nav-item">
                        <Link className="nav-link" href="/shop-all-product">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mob_nav py-lg-3">
                <div
                  className="collapse navbar-collapse py-3 relative"
                  id="navbarSupportedContent1"
                >
                  <div className="search">
                    <input
                      className="w-100"
                      type="search"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
              <div className="desktop py-lg-3">
                <div
                  className="collapse navbar-collapse py-3 relative"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav justify-content-center w-100">
                    {[
                      "Living Room",
                      "Bed Room",
                      "Outdoor",
                      "Dinning",
                      "Kitchen",
                      "Office",
                      "Lights & Lamps"
                    ].map((item, index) => (
                      <li key={index} className="nav-item">
                        <Link className="nav-link" href="/shop-all-product">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
