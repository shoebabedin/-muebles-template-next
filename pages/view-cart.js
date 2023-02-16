import Link from "next/link";
import { useState } from "react";

const ViewCart = () => {
  const goBack = () => {
    window.history.back();
  };

  const CardItem = () => {
    const [value, setValue] = useState(1);
    const incBtn = () => {
      if (value > 0) {
        setValue(value + 1);
      }
    };
    const decBtn = () => {
      if (value > 1) {
        setValue(value - 1);
      }
    };
    return (
      <div className="cart_added_item">
        <div className="img">
          <img
            className="img-fluid"
            src={("/assets/images/cart-item/item.webp")}
            alt=""
          />
        </div>
        <div className="title_price">
          <div className="cart_title_price">
            <h4>
              Muebles Sofa - Blue Performance Fabric with customize texture
            </h4>
            <span className="price"> $1,598 </span>
          </div>
          <div className="product_cat">
            <p>Taylor Flet Gray</p>
          </div>
          <div className="cart_inc_dec_del">
            <div className="input-group">
              <button
                className="quantity-left-minus"
                onClick={decBtn}
              >
                <i className="ph-minus"></i>
              </button>
              <input
                className="form-control input-number"
                data-value
                type="text"
                value={value}
                disabled
              />
              <button
                className="quantity-right-plus"
                onClick={incBtn}
              >
                <i className="ph-plus"></i>
              </button>
            </div>
            <div className="cart_del_btn">
              <button>Remove</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="checkout_process_modal view_cart_modal">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="modal-header">
              <button className="prevBtn" onClick={goBack}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.875 10H3.125"
                    stroke="#E85342"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.75 4.375L3.125 10L8.75 15.625"
                    stroke="#E85342"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <Link className="navbar-brand" href="/">
                <img src={("/assets/images/logo/logo.webp")} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-body">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="cart-item">
                {[...Array(2)].map((item, i) => (
                  <CardItem key={i}/>
                ))}
                
                <div className="cart-item-add-more">
                  <Link href="/shop-all-product" className="add-new-method">
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 10L19 10"
                          stroke="#E85342"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 1L9.99931 19"
                          stroke="#E85342"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Add More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cart_footer">
                <div className="promocode">
                  <h4 className="pcode_header">Order Summary</h4>
                  <div className="promoCodeFeild">
                    <input
                      className="couponText"
                      type="text"
                      placeholder="Coupen or gift"
                    />
                    <button className="promo_apply">Apply</button>
                  </div>
                </div>
                <div className="subtotal">
                  <p className="itemSubtotal">Item Subtotal</p>
                  <span className="price">$3100.00</span>
                </div>
                <div className="subtotal">
                  <p className="itemSubtotal">Taxs</p>
                  <span className="price">$20.00</span>
                </div>
                <div className="subtotal">
                  <p className="itemSubtotal">Estimated Total</p>
                  <span className="price">$3249.00</span>
                </div>
                <p className="shipping_tax">
                  Shipping Charge Calculated at Shipping Section
                </p>
              </div>
              <Link href="/check-out-process" className="shipping d-block">
                Shipping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
