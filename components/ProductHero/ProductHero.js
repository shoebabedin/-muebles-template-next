import Link from "next/link";
import { CaretLeft, CaretRight } from "phosphor-react";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className="absolute top-1/2 -right-6 -translate-y-1/2"
      onClick={onClick}
      style={{ ...style, display: "block" }}
    >
      <CaretRight size={24} color="#00000030" weight="bold" />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className="absolute -left-4 top-1/2 -translate-y-1/2"
      onClick={onClick}
      style={{ ...style, display: "block" }}
    >
      <CaretLeft size={24} color="#00000030" weight="bold" />
    </button>
  );
}

const ProductHero = () => {
  const [navCat, setNavCat] = useState({});

  useEffect(() => {
    fetch("/assets/Data/catNav.json")
      .then((res) => res.json())
      .then((differnet) => setNavCat(differnet));
  }, []);

  const [navActive, setNavActive] = useState("all");
  const handleNavClick = (id) => {
    setNavActive(id);
  };
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: "all-product-name",
    variableWidth: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4.5,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3.5,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.5,
          arrows: false
        }
      }
    ]
  };

  return (
    <section className="product_hero all_product_hero mt-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Slider {...settings}>
              <button
                className={`${navActive === "all" ? "navActive" : ""}`}
                onClick={() => handleNavClick("all")}
              >
                All
              </button>
              {navCat.length > 0 && navCat.map((item) => (
                <button
                  key={item.id}
                  id={item.id}
                  className={`${navActive === item.id ? "navActive" : ""}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.title}
                </button>
              ))}
            </Slider>
          </div>
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="#!">Home </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="#!">Living Room</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <Link href="#!">Sofa </Link>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
