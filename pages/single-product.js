import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// Import Swiper React components
import { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// json data
import Products from "@/components/common/Products";
import Link from "next/link";
import { Check } from "phosphor-react";
import StarRating from "../components/Accounts/StarRating";

const SingleProduct = () => {
  const [show, setShow] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [heart, setHeeart] = useState(false);
  const [data, setData] = useState({});
  const [texture, setTexture] = useState({});
  const [active, setActive] = useState();

  const activeTexture = (data) => {
    setActive(data);
  };

  useEffect(() => {
    fetch("/assets/Data/AllProduct.json")
      .then((res) => res.json())
      .then((differnet) => setData(differnet));

    fetch("/assets/Data/ProductTexture.json")
      .then((res) => res.json())
      .then((data) => {
        setTexture(data);
        setActive(data[0]);
      });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <>
      <section className="product_hero mt-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="#">Home </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="#">Living Room</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="#">Sofa </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Muebles Sofa
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-12 col-lg-2 order-2 order-lg-1">
                  <Slider
                    className="product_hero_slider_nav"
                    slidesToShow={5}
                    vertical={true}
                    asNavFor={nav2}
                    ref={(slider1) => setNav1(slider1)}
                    focusOnSelect={true}
                    // autoplay={true}
                  >
                    <div className="product_hero_slider_item">
                      <img
                        className="img-fluid"
                        src={"/assets/images/product-slider/item1.png"}
                        alt=""
                      />
                    </div>
                    <div className="product_hero_slider_item">
                      <img
                        className="img-fluid"
                        src={"/assets/images/product-slider/item2.png"}
                        alt=""
                      />
                    </div>
                    <div className="product_hero_slider_item">
                      <img
                        className="img-fluid"
                        src={"/assets/images/product-slider/item3.png"}
                        alt=""
                      />
                    </div>
                    <div className="product_hero_slider_item">
                      <img
                        className="img-fluid"
                        src={"/assets/images/product-slider/item4.png"}
                        alt=""
                      />
                    </div>
                    <div className="product_hero_slider_item">
                      <img
                        className="img-fluid"
                        src={"/assets/images/product-slider/item5.png"}
                        alt=""
                      />
                    </div>
                    <div className="product_hero_slider_item">
                      <img
                        className="img-fluid"
                        src={"/assets/images/product-slider/item6.png"}
                        alt=""
                      />
                    </div>
                  </Slider>
                </div>
                <div className="col-12 col-lg-10 order-1 order-lg-2">
                  <Slider
                    className="product_hero_slider_for"
                    slidesToShow={1}
                    asNavFor={nav1}
                    ref={(slider2) => setNav2(slider2)}
                    swipeToSlide={true}
                  >
                    <div className="product_hero_slider_item">
                      <img
                        className="img-fluid"
                        src={"/assets/images/product-slider/item1.png"}
                        alt=""
                      />
                    </div>
                    <div className="product_hero_slider_item">
                      <img
                        className="img-fluid"
                        src={"/assets/images/product-slider/item2.png"}
                        alt=""
                      />
                    </div>
                    <div className="product_hero_slider_item">
                      <img
                        className="img-fluid"
                        src={"/assets/images/product-slider/item3.png"}
                        alt=""
                      />
                    </div>
                    <div className="product_hero_slider_item">
                      <img
                        className="img-fluid"
                        src={"/assets/images/product-slider/item4.png"}
                        alt=""
                      />
                    </div>
                    <div className="product_hero_slider_item">
                      <img
                        className="img-fluid"
                        src={"/assets/images/product-slider/item5.png"}
                        alt=""
                      />
                    </div>
                    <div className="product_hero_slider_item">
                      <img
                        className="img-fluid"
                        src={"/assets/images/product-slider/item6.png"}
                        alt=""
                      />
                    </div>
                  </Slider>
                  <span
                    type="button"
                    className="btn slider-modal pictures"
                    onClick={handleShow}
                  >
                    <i className="ph-arrows-out"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="product_details">
                <h2 className="product_title">
                  Muebles Sofa - Blue Performance Fabric
                </h2>
                <span className="product_price">$1,598</span>
                <p className="product_desc">
                  Give a short description here. Describe briefly the key
                  features of this product to get your customers curious and
                  interested in this product. Give them a reason to take a
                  closer look on the product page
                </p>
                <div className="review">
                  <div className="points">
                    <div className="review_star">
                      <StarRating />
                    </div>

                    <p className="star-points">4.3</p>
                  </div>
                  <Link href="#profile" className="see-all-review">
                    See all reviews <i className="ph-arrow-right"></i>
                  </Link>
                </div>
                <div className="customize">
                  <h4>Customize</h4>
                  <p>{active?.name}</p>
                  <ul id="list" className="product-texture">
                    {texture.length > 0 &&
                      texture?.map((item) => (
                        <li
                          key={item.id}
                          id={item.id}
                          onClick={() => activeTexture(item)}
                          className={`product-texture-item ${
                            item.id === active?.id && "active"
                          }
                        }`}
                        >
                          <img
                            className="img-fluid"
                            src={`/assets/images/texture/${item.img}.png`}
                            alt=""
                          />
                          <Check
                            size={20}
                            color="#fff"
                            weight="bold"
                            className="activeCheck"
                          />
                        </li>
                      ))}
                  </ul>

                  <div className="add_to_cart">
                    <button>Add to cart</button>
                    <span
                      className="heartClick"
                      onClick={() => setHeeart(!heart)}
                    >
                      <i className={`ph-heart ${heart && "ph-heart-fill"}`}></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- customer review --> */}
      <section className="customer_review">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Product Information
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Customers Review
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Care & Cautions
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="item">
                        <h3>Cushions</h3>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English.
                        </p>
                      </div>
                      <div className="item">
                        <h3>Suspension</h3>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English.
                        </p>
                      </div>
                      <div className="item">
                        <h3>Legs</h3>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English.
                        </p>
                      </div>
                      <div className="item">
                        <h3>Frame</h3>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English.
                        </p>
                      </div>
                      <div className="item">
                        <h3>Note</h3>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="customer_review_dimensions">
                        <h3>Dimensions</h3>
                        <ul>
                          <li>
                            <p>Overall</p>
                            <span>56"w x 40"d x 31"h</span>
                          </li>
                          <li>
                            <p>Seating</p>
                            <span>40"w x 26"d x 21"h</span>
                          </li>
                          <li>
                            <p>Arm Height</p>
                            <span>8" x 27"</span>
                          </li>
                          <li>
                            <p>Accent Pillow</p>
                            <span>22" x 22"</span>
                          </li>
                          <li>
                            <p>Sofa Seating</p>
                            <span>26"d</span>
                          </li>
                          <li>
                            <p>Leg</p>
                            <span>1.5"h</span>
                          </li>
                          <li>
                            <p>Joint</p>
                            <span>
                              Glued, stapled and screwed to ensure frame
                              stability and longevity
                            </span>
                          </li>
                          <li>
                            <p>Assembly</p>
                            <span>
                              Glued, stapled and screwed to ensure frame
                              stability and longevity
                            </span>
                          </li>
                          <li>
                            <p>Style</p>
                            <span>Loose back; loose seat</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <h3>
                    Customers love the Muebles Sofa - Blue Performance Fabric
                  </h3>
                  <div className="rating">
                    <i className="ph-star-fill"></i>
                    <p>5/5</p>
                    <span>(33 reviews)</span>
                  </div>
                  <div className="rating_user">
                    <h4 className="title">user name</h4>
                    <ul className="stars">
                      <li>
                        <i className="ph-star-fill"></i>
                      </li>
                      <li>
                        <i className="ph-star-fill"></i>
                      </li>
                      <li>
                        <i className="ph-star-fill"></i>
                      </li>
                      <li>
                        <i className="ph-star-fill"></i>
                      </li>
                      <li>
                        <i className="ph-star"></i>
                      </li>
                    </ul>
                    <p className="comment">
                      The Bryant Collection features an exclusive frame
                      construction unlike any other furniture we handcraft. Its
                      one-of-a-kind comfort build, which consists predominantly
                      of plush foam and a minimal wood frame, may lead to more
                      noticeable wear and tear over time than compared to our
                      traditional designs. We stand by the comfort and
                      durability of our Bryant Collection and back it with a
                      lifetime warranty.
                    </p>
                    <p className="comment_date">Jul 19,2021</p>
                  </div>
                  <div className="rating_user">
                    <h4 className="title">user name</h4>
                    <ul className="stars">
                      <li>
                        <i className="ph-star-fill"></i>
                      </li>
                      <li>
                        <i className="ph-star-fill"></i>
                      </li>
                      <li>
                        <i className="ph-star-fill"></i>
                      </li>
                      <li>
                        <i className="ph-star-fill"></i>
                      </li>
                      <li>
                        <i className="ph-star"></i>
                      </li>
                    </ul>
                    <p className="comment">
                      The Bryant Collection features an exclusive frame
                      construction unlike any other furniture we handcraft. Its
                      one-of-a-kind comfort build, which consists predominantly
                      of plush foam and a minimal wood frame, may lead to more
                      noticeable wear and tear over time than compared to our
                      traditional designs. We stand by the comfort and
                      durability of our Bryant Collection and back it with a
                      lifetime warranty.
                    </p>
                    <p className="comment_date">Jul 19,2021</p>
                  </div>
                  <div className="rating_user">
                    <h4 className="title">user name</h4>
                    <ul className="stars">
                      <li>
                        <i className="ph-star-fill"></i>
                      </li>
                      <li>
                        <i className="ph-star-fill"></i>
                      </li>
                      <li>
                        <i className="ph-star-fill"></i>
                      </li>
                      <li>
                        <i className="ph-star-fill"></i>
                      </li>
                      <li>
                        <i className="ph-star"></i>
                      </li>
                    </ul>
                    <p className="comment">
                      The Bryant Collection features an exclusive frame
                      construction unlike any other furniture we handcraft. Its
                      one-of-a-kind comfort build, which consists predominantly
                      of plush foam and a minimal wood frame, may lead to more
                      noticeable wear and tear over time than compared to our
                      traditional designs. We stand by the comfort and
                      durability of our Bryant Collection and back it with a
                      lifetime warranty.
                    </p>
                    <p className="comment_date">Jul 19,2021</p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="item">
                        <h3>Details</h3>
                        <p>
                          It usually depends on the finish of the piece. Even if
                          you don’t need to fix solid wood furniture, time will
                          take its toll. Like other household items, furniture
                          can look worn after years of everyday use. Also,
                          because wood is a natural element, it’s more
                          vulnerable to other natural elements than pieces made
                          from chemicals. Over the years, your classic furniture
                          can start to look like old hand-me-downs.
                        </p>
                      </div>
                      <div className="item">
                        <h5>Dusting</h5>
                        <p>
                          Don't avoid dusting furniture. Frequent dusting
                          removes airborne deposits that build up in a filmy
                          layer and can scratch the surface. Clean, dry, soft
                          cloths or feather dusters will effectively remove
                          dust; however, to avoid scattering the dust into the
                          air, where it floats until landing back on furniture
                          surfaces, dampen the cloth very slightly.
                        </p>
                      </div>
                      <div className="item">
                        <h5>Treated cloths</h5>
                        <p>
                          For dusting, soft, non-scratching clothes pick up and
                          hold dirt. Use them in place of silicon sprays, which
                          are not recommended for fine wood furniture.
                        </p>
                      </div>

                      <div className="item">
                        <h5>Soft, lint-free cloth</h5>
                        <p>
                          Clean cotton T-shirts or diapers are commonly used.
                          Dampen them slightly to help trap dust.
                        </p>
                      </div>
                      <div className="item">
                        <h5>Treated cloths</h5>
                        <p>
                          For dusting, soft, non-scratching clothes pick up and
                          hold dirt. Use them in place of silicon sprays, which
                          are not recommended for fine wood furniture.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="item">
                        <h3>Product Care</h3>
                        <ul>
                          <li>
                            Put a spoonful of wax, about the size of a golf
                            ball, in a square of 100-percent-cotton fabric. Wrap
                            the fabric around the wax ball and knead it until it
                            becomes soft.
                          </li>
                          <li>
                            Rub in a circular motion, one small area at a time,
                            until the waxing is complete.
                          </li>
                          <li>
                            When the surface dulls, wipe off the excess wax. Use
                            a clean, soft cotton cloth and turn it frequently.
                          </li>
                          <li>
                            Repeat waxing and wiping until the entire piece is
                            waxed. If you notice a streak, keep wiping to remove
                            excess wax.
                          </li>
                          <li>
                            Polish the wood, with a soft cloth or lamb's-wool
                            pad attached to an electric drill or power buffer.
                            If the wax smears, wipe with a soft cloth and
                            continue buffing.
                          </li>
                          <li>
                            For a deep shine, apply a second coat of wax in the
                            same manner; to maintain waxed furniture, dust with
                            a lamb's-wool duster. Never use liquid or aerosol
                            furniture polishes because they can dissolve the wax
                            and leave a hazy film.
                          </li>
                          <li>
                            Clean approximately every year with a commercial
                            cleaning product. Work with the grain and follow
                            product directions carefully.
                          </li>
                          <li>
                            Restore as needed, especially from sun fading, using
                            a commercial finish restoring product such as Howard
                            Restore-A-Finish. Choose a shade closest to the wood
                            stain. Work with the grain of the wood and use light
                            to moderate pressure. Immediately wipe with a soft,
                            lint-free cloth, such as cheesecloth.
                          </li>
                          <li>
                            Feed as a monthly routine using an orange oil or wax
                            to prevent drying and cracking.
                          </li>
                          <li>
                            Pour talcum powder or baking soda over the surface
                            to absorb odors.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- customer review --> */}

      {/* <!-- Latest Arrivals --> */}
      <section className="flash_sell letest_arrival">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="heading">Recently Viewed</h2>
            </div>
            <Products classProps="flash_sell" data={data.length > 0 && data.slice(0, 4)} />
          </div>
        </div>
      </section>
      {/* <!-- Latest Arrivals --> */}

      {/* <!-- Latest Arrivals --> */}
      <section className="flash_sell letest_arrival">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="heading">You might Also like</h2>
            </div>
            <Products classProps="flash_sell" data={data.length > 0 && data.slice(0, 4)} />
          </div>
        </div>
      </section>
      {/* <!-- Latest Arrivals --> */}

      {/* modal product */}
      <Modal
        show={show}
        onHide={handleClose}
        className="modal"
        fullscreen={true}
        id="staticBackdrop"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="modal_slider">
            <div className="product-images">
              <Swiper
                loop={true}
                spaceBetween={15}
                navigation={false}
                modules={[Navigation, Thumbs]}
                grabCursor={false}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null
                }}
                className="vehicle-image-slider product-gallery"
              >
                <SwiperSlide>
                  <img
                    className="img-fluid"
                    src={`/assets/images/product-slider/item1.png`}
                    alt="Product"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img-fluid"
                    src={`/assets/images/product-slider/item2.png`}
                    alt="Product"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img-fluid"
                    src={`/assets/images/product-slider/item3.png`}
                    alt="Product"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img-fluid"
                    src={`/assets/images/product-slider/item4.png`}
                    alt="Product"
                  />
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={15}
                slidesPerView={5}
                focusOnSelect={true}
                modules={[Navigation, Thumbs]}
                className="vehicle-image-slider-thumbs product-thumb"
              >
                <SwiperSlide>
                  <img
                    className="img-fluid"
                    src={`/assets/images/product-slider/item1.png`}
                    alt="Product"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img-fluid"
                    src={`/assets/images/product-slider/item2.png`}
                    alt="Product"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img-fluid"
                    src={`/assets/images/product-slider/item3.png`}
                    alt="Product"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img-fluid"
                    src={`/assets/images/product-slider/item4.png`}
                    alt="Product"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* modal product */}
    </>
  );
};

export default SingleProduct;
