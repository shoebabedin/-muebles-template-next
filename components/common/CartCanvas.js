import Link from "next/link";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";

const CartCanvas = ({ handleShow, show, setShow }) => {
  // const [value, setValue] = useState(0);
  const handleClose = () => setShow(false);
 

  const CartItem = () => {
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
              <i className="ph-trash"></i>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={"end"}
        className="cart-bag"
      >
        <Offcanvas.Header closeButton>
          <h5 id="offcanvasRightLabel">In Your Bag</h5>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="cart_added">
            {[...Array(2)].map((item, i) => (
              <CartItem key={i}/>
            ))}
            
          </div>
          <div className="cart_footer">
            <div className="promocode">
              <button className="apply">Apply gift card or promo code +</button>
              <div className="promoCodeFeild d-none">
                <input
                  className="couponText"
                  type="text"
                  placeholder="Coupen or gift"
                />
                <button className="promo_apply">Apply</button>
              </div>
            </div>
            <div className="subtotal">
              <p className="subtotal">Subtotal</p>
              <span className="price">$3100.00</span>
            </div>
            <div className="subtotal discount d-none">
              <p className="subtotal">discount</p>
              <span className="price">$30.00</span>
            </div>
            <div className="btn_part">
              <Link
                className="btn success-outliine w-100 view_cart py-2"
                href="view-cart"
              >
                View Cart
              </Link>
              <Link href="/check-out-process" className="checkout">
                Checkout - $3100.00
              </Link>
            </div>
            <p className="shipping_tax">
              Shipping & Taxes Calculated at Checkout
            </p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartCanvas;
