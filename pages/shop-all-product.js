import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import FilterCanvas from "../components/common/FilterCanvas";
import Products from "../components/common/Products";
import ProductHero from "../components/ProductHero/ProductHero";

const ShopAllProduct = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/assets/Data/AllProduct.json")
      .then((res) => res.json())
      .then((differnet) => setData(differnet));
  }, []);

  const filterHandleShow = () => {
    setShow(true);
  };

  return (
    <>
      <ProductHero />

      {/* Latest Arrivals */}
      <section className="flash_sell letest_arrival shop-all-product">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="heading">LIVING ROOM</h2>
              <p className="category">Sofa</p>
            </div>
            <div className="col-lg-12">
              <div className="filter-option">
                <button
                  className="filter border-0 bg-transparent"
                  onClick={filterHandleShow}
                >
                  <i className="ph-funnel"></i>
                  Filter
                </button>

                <div className="showing-result desktop">
                  Showing 1 - 36 of 1134 results
                </div>
                <div className="showing-result mob_nav">Showing 1 - 36</div>
              </div>
            </div>
            <Products classProps="flash_sell" data={data} />

            {/* load more button */}
            <Button className="loadMore">Load More</Button>
          </div>
        </div>
      </section>
      {/* Latest Arrivals */}
      <FilterCanvas show={show} setShow={setShow} />
    </>
  );
};

export default ShopAllProduct;
