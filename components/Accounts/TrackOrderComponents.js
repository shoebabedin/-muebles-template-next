
const TrackOrderComponents = () => {
  return (
    <>
      <div className="track_my_order">
        <p className="order-track-number">
          Order<span> #6305542870926</span>
        </p>
        <div className="row">
          <div className="col-12 col-md-12 hh-grayBox pt45 pb20">
            <div className="row justify-content-between">
              <div className="order-tracking completed">
                <span className="is-complete"></span>
                <p>Processing</p>
              </div>
              <div className="order-tracking completed">
                <span className="is-complete"></span>
                <p>Shipped</p>
              </div>
              <div className="order-tracking">
                <span className="is-complete"></span>
                <p>Delivered</p>
              </div>
            </div>
          </div>
        </div>
        <div className="order_item">
          <div className="order_item_details">
            <div className="img">
              <img
                className="img-fluid"
                src={("/assets/images/cart-item/item.png")}
                alt=""
              />
            </div>
            <div className="product_details">
              <h4>
                Muebles Sofa - Blue Performance Fabric with customize texture
              </h4>
              <span>Taylor Flet Gray</span>
              <p>$1,598</p>
            </div>
          </div>
          <div className="order_item_details">
            <div className="img">
              <img
                className="img-fluid"
                src={("/assets/images/cart-item/item1.png")}
                alt=""
              />
            </div>
            <div className="product_details">
              <h4>
                Muebles Sofa - Blue Performance Fabric with customize texture
              </h4>
              <span>Taylor Flet Gray</span>
              <p>$1,598</p>
            </div>
          </div>
        </div>
        <div className="order-details">
          <p className="order_summary">Order Summary</p>
          <hr />
          <ul>
            <li>
              <p>Item Subtotal</p>
              <span>$3100.00</span>
            </li>
            <li>
              <p>Taxs</p>
              <span>$20.00</span>
            </li>
            <li>
              <p>Shipping</p>
              <span>$129.00</span>
            </li>
          </ul>
          <div className="order_total">
            <p>Total</p>
            <span>$3249.00</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackOrderComponents;
