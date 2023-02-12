import Link from "next/link";
import { useState } from "react";

const CheckOutProcess = () => {
  const [process, setProcess] = useState(0);
  const [isDateActive, setIsDateActive] = useState(false);

  return (
    <>
      <div className="checkout_process_modal view_cart_modal">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="modal-header">
                {process > 0 && (
                  <button
                    type="button"
                    id="prevBtn"
                    onClick={() => setProcess(process - 1)}
                  >
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
                )}

                <Link className="navbar-brand" href="/">
                  <img
                    src={("/assets/images/logo/logo.png")}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="col-12">
            <div className="step_status">
              <span
                className={`step ${process === 0 && "active"} ${
                  process === 1 && "finish"
                } ${process === 2 && "finish"} ${process === 3 && "finish"}`}
              >
                <div className="box">
                  <span className="check">
                    <svg
                      width="20"
                      height="14"
                      viewBox="0 0 20 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.75 2L7.25 12.5L2 7.25"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="process">
                    <div className="loader"></div>
                  </span>
                </div>
                <p>Shipping</p>
              </span>
              <span
                className={`step ${process === 1 && "active"} ${
                  process === 2 && "finish"
                } ${process === 3 && "finish"}`}
              >
                <div className="box">
                  <span className="check">
                    <svg
                      width="20"
                      height="14"
                      viewBox="0 0 20 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.75 2L7.25 12.5L2 7.25"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="process">
                    <div className="loader"></div>
                  </span>
                </div>
                <p>Delivery</p>
              </span>
              <span
                className={`step ${
                  (process === 2 && "active") || (process === 3 && "finish")
                }`}
              >
                <div className="box">
                  <span className="check">
                    <svg
                      width="20"
                      height="14"
                      viewBox="0 0 20 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.75 2L7.25 12.5L2 7.25"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="process">
                    <div className="loader"></div>
                  </span>
                </div>
                <p>Payment</p>
              </span>
              <span className={`step ${process === 3 && "active"}`}>
                <div className="box">
                  <span className="check">
                    <svg
                      width="20"
                      height="14"
                      viewBox="0 0 20 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.75 2L7.25 12.5L2 7.25"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="process">
                    <div className="loader"></div>
                  </span>
                </div>
                <p>Complete</p>
              </span>
            </div>

            <div className={`tab ${process === 0 && "d-block"}`}>
              <div className="row">
                <div className="col-lg-8">
                  {isDateActive ? (
                    <div className="edit_shipping_address">
                      <form action="#!">
                        <div className="row">
                          <div className="col-lg-6 col-12">
                            <div className="mb-3">
                              <label htmlFor="firstName" className="form-label">
                                First Name
                              </label>
                              <input
                                type="text"
                                id="firstName"
                                className="form-control"
                                placeholder="First Name"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-12">
                            <div className="mb-3">
                              <label htmlFor="lastName" className="form-label">
                                Last Name
                              </label>
                              <input
                                type="text"
                                id="lastName"
                                className="form-control"
                                placeholder="Last Name"
                              />
                            </div>
                          </div>
                          <div className="col-lg-3 col-12">
                            <div className="mb-3">
                              <label htmlFor="country" className="form-label">
                                Country
                              </label>
                              <input
                                type="text"
                                id="country"
                                className="form-control"
                                placeholder="Country"
                              />
                            </div>
                          </div>
                          <div className="col-lg-3 col-12">
                            <div className="mb-3">
                              <label htmlFor="city" className="form-label">
                                City
                              </label>
                              <input
                                type="text"
                                id="city"
                                className="form-control"
                                placeholder="City"
                              />
                            </div>
                          </div>
                          <div className="col-lg-3 col-12">
                            <div className="mb-3">
                              <label htmlFor="provience" className="form-label">
                                Provience
                              </label>
                              <input
                                type="text"
                                id="provience"
                                className="form-control"
                                placeholder="Provience"
                              />
                            </div>
                          </div>
                          <div className="col-lg-3 col-12">
                            <div className="mb-3">
                              <label htmlFor="zipCode" className="form-label">
                                Zip Code
                              </label>
                              <input
                                type="text"
                                id="zipCode"
                                className="form-control"
                                placeholder="Zip Code"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="mb-3">
                              <label htmlFor="address" className="form-label">
                                Address
                              </label>
                              <input
                                type="text"
                                id="address"
                                className="form-control"
                                placeholder="Address"
                              />
                            </div>
                          </div>
                          <div className="col-12 d-flex align-items-center justify-content-end gap-2 update-btn">
                            <button
                              className="btn warning cancel-btn"
                              onClick={() => setIsDateActive(false)}
                            >
                              Cancel
                            </button>
                            <button
                              className="btn success save-btn"
                              onClick={() => setIsDateActive(false)}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <div className="shipping_address cart-item">
                      <div className="shipping_address_item">
                        <div className="address_name">
                          <input
                            className="form-check-input"
                            type="radio"
                            defaultChecked={true}
                            name="exampleRadios"
                            id="home"
                            value="option1"
                          />
                          <label htmlFor="home">Home</label>
                          <span className="default">Default</span>
                        </div>
                        <div className="address_info">
                          <h4 className="user_name">Nathan C. Collette</h4>
                          <p className="address">
                            4503 Villa DriveElkhart, IN 46516
                          </p>
                          <span>574-322-7161</span>
                        </div>
                        <div className="cta_btn">
                          <button className="cta-remove">Remove</button>
                          <button
                            className="cta-edit"
                            onClick={() => setIsDateActive(true)}
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                      <div className="shipping_address_item">
                        <div className="address_name">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="work"
                            value="option2"
                          />
                          <label htmlFor="work">Work</label>
                        </div>
                        <div className="address_info">
                          <h4 className="user_name">Nathan C. Collette</h4>
                          <p className="address">
                            4503 Villa DriveElkhart, IN 46516
                          </p>
                          <span>574-322-7161</span>
                        </div>
                        <div className="cta_btn">
                          <button className="cta-remove">Remove</button>
                          <button
                            className="cta-edit"
                            onClick={() => setIsDateActive(true)}
                          >
                            Edit
                          </button>
                        </div>
                      </div>
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
                          Add New Address
                        </Link>
                      </div>
                    </div>
                  )}
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
                    onClick={() => setProcess(process + 1)}
                    className="shipping"
                    type="button"
                    id="nextBtn"
                  >
                    Delivery
                  </button>
                </div>
              </div>
            </div>
            <div className={`tab ${process === 1 && "d-block"}`}>
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
                          htmlFor="myCheck"
                          className="container check-date"
                        >
                          I’d like to pick my own date
                          <input
                            type="checkbox"
                            id="myCheck"
                            onClick={() => setIsDateActive(!isDateActive)}
                          />
                          <span className="checkmark"></span>
                        </label>
                        {isDateActive && (
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
                        )}
                      </div>
                    </div>
                    <div className="shipping_address_item delivery_method">
                      <h4 className="heading">Delivery Method</h4>
                      <div className="address_name">
                        <input type="radio" name="home" id="shipment" />
                        <label htmlFor="shipment">Drop the shipment</label>
                      </div>
                      <div className="address_info">
                        <p className="address">
                          Just drop the shipment in your address
                        </p>
                      </div>
                      <div className="address_name">
                        <input type="radio" name="home" id="setup" />
                        <label htmlFor="setup">Drop and setup</label>
                      </div>
                      <div className="address_info">
                        <p className="address">
                          Delivery group will remove all bundling, bring item(s)
                          indoor, and perform light get together when required.
                          It will charge extra $250
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
                    onClick={() => setProcess(process + 1)}
                  >
                    Payment
                  </button>
                </div>
              </div>
            </div>
            <div className={`tab ${process === 2 && "d-block"}`}>
              <div className="row">
                <div className="col-lg-8">
                  {isDateActive ? (
                    <div className="edit_shipping_address edit_card_new">
                      <form action="#!">
                        <div className="row">
                          <div className="col-lg-12 col-12">
                            <div className="mb-3">
                              <label htmlFor="nameCard" className="form-label">
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
                              <label htmlFor="nameCard" className="form-label">
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
                              <label htmlFor="mm/yy" className="form-label">
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
                              <label htmlFor="cvv" className="form-label">
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
                            <button
                              className="btn warning card-cancel-btn"
                              onClick={() => setIsDateActive(false)}
                            >
                              Cancel
                            </button>
                            <button
                              className="btn success card-save-btn"
                              onClick={() => setIsDateActive(false)}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  ) : (
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
                            <label htmlFor="paypal">Payment with paypal</label>
                          </div>
                          <span>
                            <img
                              src={("/assets/images/payment/paypal.png")}
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="address_info">
                          <p className="address">
                            You will be redirected to PayPal website to complete
                            your purchase securely.
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
                              defaultChecked
                            />
                            <label htmlFor="credit_debit">
                              Credit / Debit Card
                            </label>
                          </div>
                          <span>
                            <img
                              src={("/assets/images/payment/mastercard.png")}
                              alt=""
                            />
                            <img
                              src={("/assets/images/payment/visa.png")}
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="address_info">
                          <p className="address">
                            We support Mastercard, Visa, Amex & American express
                          </p>
                        </div>
                        <div className="cart-item-add-more">
                          <button
                            className="add_card"
                            onClick={() => setIsDateActive(!isDateActive)}
                          >
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
                          </button>
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
                            <label htmlFor="cash_delivery">
                              Cash on delivery
                            </label>
                          </div>
                        </div>
                        <div className="address_info">
                          <p className="address">
                            After delivery confirmation you can pay the amount
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
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
                    onClick={() => setProcess(process + 1)}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
            <div className={`tab last-step ${process === 3 && "d-block"}`}>
              <div className="row">
                <div className="col-12 text-center">
                  <h3 className="">Your Payment is successfully complete</h3>
                  <Link className="warning px-2 py-1 mt-4" href="/">
                    Back to home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutProcess;
