import React from "react";

const StepTwo = () => {
  return (
    <>
      <div className="tab">
        <div className="row">
          <div className="col-lg-8">
            <div className="shipping_address cart-item">
              <div className="shipping_estimate_delivery">
                <div className="shipping_estimate_delivery_time">
                  <h4>Estimated Delivery Time</h4>
                  <p>Oct 25- Oct 31</p>
                </div>
                <div className="address_name">
                  <label
                    for="myCheck"
                    className="container check-date"
                    onClick="myDateShow()"
                  >
                    I’d like to pick my own date
                    <input type="checkbox" id="myCheck" />
                    <span className="checkmark"></span>
                  </label>
                  <div className="date">
                    <div className="custom-date" id="text">
                      <input
                        id="dateofbirth"
                        className="custom-date-picker"
                        type="date"
                        name=""
                        placeholder="Date"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="shipping_address_item delivery_method">
                <h4 className="heading">Delivery Method</h4>
                <div className="address_name">
                  <input type="radio" name="home" id="shipment" />
                  <label for="shipment">Drop the shipment</label>
                </div>
                <div className="address_info">
                  <p className="address">
                    Just drop the shipment in your address
                  </p>
                </div>
                <div className="address_name">
                  <input type="radio" name="home" id="setup" />
                  <label for="setup">Drop and setup</label>
                </div>
                <div className="address_info">
                  <p className="address">
                    Delivery group will remove all bundling, bring item(s)
                    indoor, and perform light get together when required. It
                    will charge extra $250
                  </p>
                </div>
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
            </div>
            <button
              className="shipping"
              type="button"
              id="nextBtn"
              onClick="nextPrev(1)"
            >
              Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
