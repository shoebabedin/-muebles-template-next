import React from "react";

const StepThree = () => {
  return (
    <>
      <div className="tab">
        <div className="row">
          <div className="col-lg-8">
            <div className="shipping_address cart-item payment-address">
              <div className="shipping_address_item">
                <div className="address_name payment">
                  <div>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="paypal"
                      value="option1"
                    />
                    <label for="paypal">Payment with paypal</label>
                  </div>
                  <span>
                    <img src="./../assets/images/payment/paypal.png" alt="" />
                  </span>
                </div>
                <div className="address_info">
                  <p className="address">
                    You will be redirected to PayPal website to complete your
                    purchase securely.
                  </p>
                </div>
              </div>
              <div className="shipping_address_item payment_part">
                <div className="address_name payment">
                  <div>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="credit_debit"
                      value="option1"
                      checked
                    />
                    <label for="credit_debit">Credit / Debit Card</label>
                  </div>
                  <span>
                    <img
                      src="./../assets/images/payment/mastercard.png"
                      alt=""
                    />
                    <img src="./../assets/images/payment/visa.png" alt="" />
                  </span>
                </div>
                <div className="address_info">
                  <p className="address">
                    We support Mastercard, Visa, Amex & American express
                  </p>
                </div>
                <div className="cart-item-add-more">
                  <a href="#" className="add_card">
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
                    Add Card
                  </a>
                </div>
              </div>
              <div className="shipping_address_item">
                <div className="address_name payment">
                  <div>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="cash_delivery"
                      value="option1"
                    />
                    <label for="cash_delivery">Cash on delivery</label>
                  </div>
                </div>
                <div className="address_info">
                  <p className="address">
                    After delivery confirmation you can pay the amount
                  </p>
                </div>
              </div>
            </div>
            <div className="edit_shipping_address edit_card_new d-none">
              <form action="#!">
                <div className="row">
                  <div className="col-lg-12 col-12">
                    <div className="mb-3">
                      <label for="nameCard" className="form-label">
                        Name On Card
                      </label>
                      <input
                        type="text"
                        id="nameCard"
                        className="form-control"
                        placeholder="Name On Card"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-12">
                    <div className="mb-3">
                      <label for="nameCard" className="form-label">
                        Card Number
                      </label>
                      <input
                        type="text"
                        id="nameCard"
                        className="form-control"
                        placeholder="Card Number"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="mb-3">
                      <label for="mm/yy" className="form-label">
                        MM/YY
                      </label>
                      <input
                        type="text"
                        id="mm/yy"
                        className="form-control"
                        placeholder="MM/YY"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="mb-3">
                      <label for="cvv" className="form-label">
                        CVV
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        className="form-control"
                        placeholder="CVV"
                      />
                    </div>
                  </div>

                  <div className="col-12 d-flex align-items-center justify-content-end gap-2 update-btn">
                    <button className="btn warning card-cancel-btn">
                      Cancel
                    </button>
                    <button className="btn success card-save-btn">Save</button>
                  </div>
                </div>
              </form>
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
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepThree;
