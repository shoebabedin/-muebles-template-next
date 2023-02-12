import Link from "next/link";

const HomeHero = () => {
  return (
    <section className="hero">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="image">
              <img
                className="img-fluid"
                src={("/assets/images/hero/hero-bg.webp")}
                alt=""
              />
              <div className="overlay">
                <h2>Living & Bed Room</h2>
                <Link href="shop-all-product" className="shop_collection">
                  Shop Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
