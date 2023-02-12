import Link from "next/link";

const StickyMobileNav = (props) => {
  // const location = useLocation();
  // const str = location.pathname;
  

  return (
    <>
      <section className="mobile_nav mob_nav">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="mobile_sticky_nav">
                <li className="">
                  <Link 
                  // className={str === '/' && 'active'} 
                  href="/">
                    <i className="ph-house"></i>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/wishlist" 
                  // className={str === '/wishlist' && 'active'}
                  >
                    <i className="ph-heart"></i>
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link href="#!"
                    className="nav-link border-0 bg-transparent"
                    onClick={props.handleShow}
                  >
                    <i className="ph-handbag"></i>
                    Cart
                  </Link>
                </li>
                <li >
                  <Link href="/profile" 
                  // className={str === '/profile' && 'active'}
                  >
                    <i className="ph-user"></i>
                    Account
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StickyMobileNav;
