
const WishListComponents = () => {
  return (
    <>
      <div className="wishlist">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="wishlist_item">
              <div className="d-flex align-items-start gap-3">
                <div className="img">
                  <img
                    className="img-fluid"
                    src={("/assets/images/cart-item/item.webp")}
                    alt=""
                  />
                  <span className="heartClick mob_nav">
                    <i className="ph-heart-fill"></i>
                  </span>
                </div>

                <div className="desc">
                  <h4>
                    Muebles Sofa - Blue Performance Fabric with customize
                    texture
                  </h4>
                  <p>Taylor Flet Gray</p>
                  <div className="price_heart d-flex">
                    <h2>$1,598</h2>
                    <span className="heartClick">
                      <i className="ph-heart-fill"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="wishlist_item">
              <div className="d-flex align-items-start gap-3">
                <div className="img">
                  <img
                    className="img-fluid"
                    src={("/assets/images/cart-item/item1.webp")}
                    alt=""
                  />
                  <span className="heartClick mob_nav">
                    <i className="ph-heart-fill"></i>
                  </span>
                </div>
                <div className="desc">
                  <h4>
                    Muebles Sofa - Blue Performance Fabric with customize
                    texture
                  </h4>
                  <p>Taylor Flet Gray</p>
                  <div className="price_heart d-flex">
                    <h2>$1,598</h2>
                    <span className="heartClick">
                      <i className="ph-heart-fill"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="wishlist_item">
              <div className="d-flex align-items-start gap-3">
                <div className="img">
                  <img
                    className="img-fluid"
                    src={("/assets/images/cart-item/item.webp")}
                    alt=""
                  />
                  <span className="heartClick mob_nav">
                    <i className="ph-heart-fill"></i>
                  </span>
                </div>
                <div className="desc">
                  <h4>
                    Muebles Sofa - Blue Performance Fabric with customize
                    texture
                  </h4>
                  <p>Taylor Flet Gray</p>
                  <div className="price_heart d-flex">
                    <h2>$1,598</h2>
                    <span className="heartClick">
                      <i className="ph-heart-fill"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishListComponents;
