import React from "react";

const StepOne = () => {
  return (
    <>
      <div className="tab">
        <div className="row">
          <div className="col-lg-8">
            <div className="shipping_address cart-item d-block">
              <div className="shipping_address_item">
                <div className="address_name">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="home"
                    value="option1"
                    checked
                  />
                  <label for="home">Home</label>
                  <span className="default">Default</span>
                </div>
                <div className="address_info">
                  <h4 className="user_name">Nathan C. Collette</h4>
                  <p className="address">4503 Villa DriveElkhart, IN 46516</p>
                  <span>574-322-7161</span>
                </div>
                <div className="cta_btn">
                  <button className="cta-remove">Remove</button>
                  <button className="cta-edit">Edit</button>
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
                  <label for="work">Work</label>
                </div>
                <div className="address_info">
                  <h4 className="user_name">Nathan C. Collette</h4>
                  <p className="address">4503 Villa DriveElkhart, IN 46516</p>
                  <span>574-322-7161</span>
                </div>
                <div className="cta_btn">
                  <button className="cta-remove">Remove</button>
                  <button className="cta-edit">Edit</button>
                </div>
              </div>
              <div className="cart-item-add-more">
                <a href="#">
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
                </a>
              </div>
            </div>
            <div className="edit_shipping_address d-none">
              <form action="#!">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <div className="mb-3">
                      <label for="firstName" className="form-label">
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
                      <label for="lastName" className="form-label">
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
                      <label for="country" className="form-label">
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
                      <label for="city" className="form-label">
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
                      <label for="provience" className="form-label">
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
                      <label for="zipCode" className="form-label">
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
                      <label for="address" className="form-label">
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
                    <button className="btn warning cancel-btn">Cancel</button>
                    <button className="btn success save-btn">Save</button>
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
              Delivery
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepOne;
