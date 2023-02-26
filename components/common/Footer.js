import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const location = useRouter();
  const locationSplit = location.pathname;
 console.log(locationSplit);

  return (
    <>
      <section className="footer pt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-12">
              <img
                className="img-fluid"
                src={("/assets/images/footer/logo.png")}
                alt=""
              />
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonlyIn publishing and graphic design, Lorem ipsum is a
                placeholder text commonly
              </p>
              <h4>Secure Payment</h4>
              <ul className="payment">
                <li>
                  <img
                    src={("/assets/images/footer/visa.webp")}
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src={("/assets/images/footer/american-express.webp")}
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src={("/assets/images/footer/mastercard.webp")}
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src={("/assets/images/footer/paypal.webp")}
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src={("/assets/images/footer/stripe.webp")}
                    alt=""
                  />
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <h4 className="heading">Company</h4>
              <ul className="footer_link">
                <li className={locationSplit === "/" ? 'active' : ''}>
                  <Link href="/">Home</Link>
                </li>
                <li className={locationSplit === "/about-us" ? 'active' : ''}>
                  <Link href="about-us">About Us</Link>
                </li>
                <li className={locationSplit === "/shop-all-product" ? 'active' : ''}>
                  <Link href="shop-all-product">Shop</Link>
                </li>
                <li className={locationSplit === "/login" ? 'active' : ''}>
                  <Link href="/login">Login</Link>
                </li>
                <li className={locationSplit === "/signup" ? 'active' : ''}>
                  <Link href="/signup">Sign Up</Link>
                </li>
                <li className={locationSplit === "/verify-email" ? 'active' : ''}>
                  <Link href="/verify-email">Verify Email</Link>
                </li>
                <li className={locationSplit === "/forgot-password" ? 'active' : ''}>
                  <Link href="/forgot-password">Forgot Password</Link>
                </li>
                <li className={locationSplit === "/comming-soon" ? 'active' : ''}>
                  <Link href="/comming-soon">Comming Soon</Link>
                </li>
                <li className={locationSplit === "/404" ? 'active' : ''}>
                  <Link href="404">4O4 - Page</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <h4 className="heading">Terms of services</h4>
              <ul className="footer_link">
                <li className={locationSplit === "/terms-condition" ? 'active' : ''}>
                  <Link href="terms-condition">Terms & Conditions</Link>
                </li>
                <li className={locationSplit === "/privacy-policy" ? 'active' : ''}>
                  <Link href="privacy-policy">Privacy Policy</Link>
                </li>
                <li className={locationSplit === "/payment-policy" ? 'active' : ''}>
                  <Link href="payment-policy">Payment Policy</Link>
                </li>
                <li className={locationSplit === "/exchange-return" ? 'active' : ''}>
                  <Link href="exchange-return">Exchange & Return</Link>
                </li>
                <li className={locationSplit === "/shipping-policy" ? 'active' : ''}>
                  <Link href="shipping-policy">Shipping Policy</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <h4 className="heading">Featured products</h4>
              <ul className="footer_link">
                <li className={locationSplit === "/shop-all-product" ? 'active' : ''}>
                  <Link href="shop-all-product">Sofa</Link>
                </li>
                <li className={locationSplit === "/shop-all-product" ? 'active' : ''}>
                  <Link href="shop-all-product">Couch</Link>
                </li>
                <li className={locationSplit === "/shop-all-product" ? 'active' : ''}>
                  <Link href="shop-all-product">Bed</Link>
                </li>
                <li className={locationSplit === "/shop-all-product" ? 'active' : ''}>
                  <Link href="shop-all-product">Wall Clock</Link>
                </li>
                <li className={locationSplit === "/shop-all-product" ? 'active' : ''}>
                  <Link href="shop-all-product">Chair</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <h4 className="heading">Support & Contact</h4>
              <ul className="supprt_link">
                <li>
                  <Link href="callto:09666737333">
                    <i className="ph-phone-fill"></i> 09666737333
                  </Link>
                </li>
                <li>
                  <Link href="mailto:support@muebles.xyz">
                    <i className="ph-at"></i> support@muebles.xyz
                  </Link>
                </li>
              </ul>

              <ul className="social_link">
                <li>
                  <Link href="#">
                    <svg
                      width="12"
                      height="24"
                      viewBox="0 0 12 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.79563 23.1326V12.5979H11.3496L11.8779 8.47323H7.79563V5.84598C7.79563 4.65574 8.12725 3.84083 9.83548 3.84083H12V0.163457C10.9468 0.0505916 9.88824 -0.00390491 8.82905 0.000217437C5.68766 0.000217437 3.53085 1.91796 3.53085 5.43852V8.46551H0V12.5902H3.53856V23.1326H7.79563Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.1605 0.406738C8.12972 0.406738 7.74937 0.41999 6.55902 0.47416C5.37099 0.528563 4.56007 0.716648 3.85051 0.992614C3.11653 1.27765 2.49392 1.65893 1.87364 2.27945C1.25289 2.89973 0.871606 3.52234 0.585643 4.25608C0.30898 4.96587 0.120662 5.77703 0.0671897 6.96459C0.0139494 8.15494 0 8.53553 0 11.5663C0 14.597 0.0134844 14.9762 0.0674222 16.1666C0.122057 17.3546 0.310142 18.1655 0.585876 18.8751C0.871141 19.609 1.25243 20.2317 1.87294 20.8519C2.49299 21.4727 3.1156 21.8549 3.84911 22.1399C4.55914 22.4159 5.37029 22.604 6.55809 22.6584C7.74844 22.7126 8.12856 22.7258 11.1591 22.7258C14.19 22.7258 14.5692 22.7126 15.7596 22.6584C16.9476 22.604 17.7595 22.4159 18.4695 22.1399C19.2032 21.8549 19.8249 21.4727 20.445 20.8519C21.0657 20.2317 21.447 19.609 21.733 18.8753C22.0073 18.1655 22.1956 17.3544 22.2514 16.1668C22.3049 14.9764 22.3188 14.597 22.3188 11.5663C22.3188 8.53553 22.3049 8.15517 22.2514 6.96482C22.1956 5.7768 22.0073 4.96587 21.733 4.25631C21.447 3.52234 21.0657 2.89973 20.445 2.27945C19.8242 1.6587 19.2035 1.27741 18.4688 0.992614C17.7574 0.716648 16.946 0.528563 15.758 0.47416C14.5676 0.41999 14.1887 0.406738 11.157 0.406738H11.1605ZM10.1593 2.41775C10.4564 2.41728 10.788 2.41775 11.1604 2.41775C14.14 2.41775 14.4932 2.42844 15.6698 2.48192C16.7579 2.53167 17.3484 2.71348 17.7418 2.86622C18.2625 3.06849 18.6338 3.31028 19.0242 3.70086C19.4148 4.09145 19.6565 4.46343 19.8593 4.98421C20.012 5.37712 20.1941 5.96764 20.2436 7.0557C20.2971 8.2321 20.3087 8.58548 20.3087 11.5637C20.3087 14.5419 20.2971 14.8953 20.2436 16.0717C20.1938 17.1597 20.012 17.7503 19.8593 18.1432C19.657 18.6639 19.4148 19.0348 19.0242 19.4251C18.6336 19.8157 18.2628 20.0575 17.7418 20.2598C17.3488 20.4132 16.7579 20.5945 15.6698 20.6443C14.4934 20.6978 14.14 20.7094 11.1604 20.7094C8.18059 20.7094 7.82744 20.6978 6.65104 20.6443C5.56298 20.5941 4.97246 20.4123 4.57885 20.2595C4.05807 20.0573 3.68609 19.8155 3.2955 19.4249C2.90492 19.0343 2.66313 18.6632 2.4604 18.1422C2.30765 17.7493 2.12561 17.1588 2.07609 16.0707C2.02262 14.8943 2.01192 14.541 2.01192 11.5609C2.01192 8.58083 2.02262 8.22931 2.07609 7.05291C2.12584 5.96485 2.30765 5.37433 2.4604 4.98095C2.66266 4.46018 2.90492 4.08819 3.2955 3.69761C3.68609 3.30702 4.05807 3.06523 4.57885 2.8625C4.97222 2.70906 5.56298 2.52772 6.65104 2.47773C7.6805 2.43123 8.07946 2.41728 10.1593 2.41496V2.41775ZM17.1173 4.2707C16.378 4.2707 15.7781 4.86983 15.7781 5.60938C15.7781 6.3487 16.378 6.94852 17.1173 6.94852C17.8566 6.94852 18.4564 6.3487 18.4564 5.60938C18.4564 4.87006 17.8566 4.2707 17.1173 4.2707ZM11.1605 5.83536C7.99559 5.83536 5.4296 8.40135 5.4296 11.5662C5.4296 14.7311 7.99559 17.296 11.1605 17.296C14.3254 17.296 16.8904 14.7311 16.8904 11.5662C16.8904 8.40135 14.3254 5.83536 11.1605 5.83536ZM11.1604 7.8464C13.2147 7.8464 14.8803 9.51173 14.8803 11.5662C14.8803 13.6205 13.2147 15.2861 11.1604 15.2861C9.10592 15.2861 7.4406 13.6205 7.4406 11.5662C7.4406 9.51173 9.10592 7.8464 11.1604 7.8464Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <svg
                      width="23"
                      height="19"
                      viewBox="0 0 23 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.0011 5.3124L11.0488 6.09877L10.254 6.00248C7.36087 5.63337 4.83337 4.38161 2.68738 2.27929L1.63823 1.23615L1.368 2.00647C0.795734 3.72363 1.16135 5.53708 2.35356 6.75675C2.98941 7.43077 2.84635 7.52706 1.74951 7.12585C1.368 6.99747 1.03418 6.90118 1.00238 6.94932C0.891111 7.06166 1.27262 8.52205 1.57465 9.09979C1.98795 9.9022 2.83045 10.6886 3.75243 11.154L4.53134 11.5231L3.60936 11.5391C2.71918 11.5391 2.68738 11.5552 2.78276 11.8922C3.10068 12.9353 4.35649 14.0426 5.75535 14.5241L6.74092 14.8611L5.88252 15.3746C4.61083 16.1129 3.11658 16.5301 1.62234 16.5622C0.907008 16.5783 0.318848 16.6425 0.318848 16.6906C0.318848 16.8511 2.25819 17.7498 3.38682 18.1028C6.77271 19.146 10.7945 18.6966 13.8147 16.9153C15.9607 15.6475 18.1067 13.1279 19.1082 10.6886C19.6486 9.38865 20.1891 7.01352 20.1891 5.87409C20.1891 5.13587 20.2368 5.03958 21.127 4.15693C21.6516 3.64339 22.1443 3.0817 22.2397 2.92122C22.3987 2.6163 22.3828 2.6163 21.5721 2.88912C20.2209 3.37057 20.0302 3.30638 20.6978 2.58421C21.1906 2.07066 21.7787 1.13987 21.7787 0.867045C21.7787 0.8189 21.5403 0.899142 21.2701 1.04358C20.9839 1.20406 20.3481 1.44478 19.8712 1.58922L19.0128 1.86204L18.2339 1.33244C17.8047 1.04358 17.2006 0.722611 16.8827 0.626322C16.072 0.401647 14.8321 0.433743 14.1009 0.690515C12.1138 1.41269 10.858 3.27428 11.0011 5.3124Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <svg
                      width="23"
                      height="17"
                      viewBox="0 0 23 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.914 1.13224C20.8606 1.39199 21.6061 2.15737 21.8591 3.12933C22.3188 4.89089 22.3188 8.56641 22.3188 8.56641C22.3188 8.56641 22.3188 12.2418 21.8591 14.0035C21.6061 14.9754 20.8606 15.7408 19.914 16.0007C18.1985 16.4727 11.3188 16.4727 11.3188 16.4727C11.3188 16.4727 4.43922 16.4727 2.7236 16.0007C1.77697 15.7408 1.03147 14.9754 0.778473 14.0035C0.318848 12.2418 0.318848 8.56641 0.318848 8.56641C0.318848 8.56641 0.318848 4.89089 0.778473 3.12933C1.03147 2.15737 1.77697 1.39199 2.7236 1.13224C4.43922 0.660156 11.3188 0.660156 11.3188 0.660156C11.3188 0.660156 18.1985 0.660156 19.914 1.13224ZM9.25637 5.47258V12.3476L14.7564 8.91021L9.25637 5.47258Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-12">
              <p className="tiny_footer">
                © Muebles- Copyright & reserved by Intelli Digital
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
