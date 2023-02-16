import { useState } from "react";

const OrderComponents = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      {isVisible ? (
        <div className="order_item_details">
          <div className="track_my_order">
            <div className="d-flex align-items-center justify-content-between shiped_delivered_status">
              <p className="order-track-number">
                Order<span> #6305542870926</span>
              </p>
              <span>delivered</span>
            </div>
            <div className="order_item">
              <div className="order_item_details">
                <div className="img">
                  <img
                    className="img-fluid"
                    src={("/assets/images/cart-item/item.webp")}
                    alt=""
                  />
                </div>
                <div className="product_details">
                  <h4>
                    Muebles Sofa - Blue Performance Fabric with customize
                    texture
                  </h4>
                  <span>Taylor Flet Gray</span>
                  <p>$1,598</p>
                </div>
              </div>
              <div className="order_item_details">
                <div className="img">
                  <img
                    className="img-fluid"
                    src={("/assets/images/cart-item/item1.webp")}
                    alt=""
                  />
                </div>
                <div className="product_details">
                  <h4>
                    Muebles Sofa - Blue Performance Fabric with customize
                    texture
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
        </div>
      ) : (
        <div className="track_my_order track_my_order_with_number">
          <div className="order_item" onClick={() => setIsVisible(true)}>
            <div className="img_order_number">
              <div className="img">
                <img
                  className="img-fluid"
                  src={("/assets/images/cart-item/item.webp")}
                  alt=""
                />
              </div>
              <div className="order_number">
                <h4>Order #6305542870926</h4>
                <p>June 07, 2022</p>
              </div>
            </div>
            <div className="shiped_delivered_status">
              <span className="desktop">shipped</span>
              <h3>$1,598</h3>
            </div>
          </div>
          <div className="order_item" onClick={() => setIsVisible(true)}>
            <div className="img_order_number">
              <div className="img">
                <img
                  className="img-fluid"
                  src={("/assets/images/cart-item/item.webp")}
                  alt=""
                />
              </div>
              <div className="order_number">
                <h4>Order #6305542870926</h4>
                <p>June 07, 2022</p>
              </div>
            </div>
            <div className="shiped_delivered_status">
              <span className="desktop">delivered </span>
              <h3>$1,598</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderComponents;
