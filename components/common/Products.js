import Link from "next/link";
import { useState } from "react";

const Products = ({ classProps, data }) => {
  const SIngleProduct = ({ item }) => {
    const [heart, setHeeart] = useState(false);
    

    const { id, img, name, price, discountPrice } = item;

    return (
      <div key={id} className="col-lg-3 col-md-6">
        <div className="image">
          <span className="heartClick" onClick={() => setHeeart(!heart)}>
            <i className={`ph-heart ${heart ? "ph-heart-fill" : ""}`}></i>
          </span>
          <img
            className="img-fluid"
            src={(`/assets/images/all-products/${img}.webp`)}
            alt=""
          />
        </div>

        <Link href="/single-product">
          <h4>{name}</h4>
        </Link>
        <div className="price">
          {classProps ? (
            <>
              <p className="regular_price">
                <del>$ {price}</del>
              </p>

              <p className="update_price">$ {price}</p>
            </>
          ) : (
            <p className="regular_price">$ {discountPrice}</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      {data.length > 0 && data.map((item, i) => (
        <SIngleProduct key={i} item={item} />
      ))}
    </>
  );
};

export default Products;
