import { useState } from "react";

const BillingComponents = () => {
  const [isEdit, setIsEdit] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <div className="checkout_process_modal view_cart_modal">
        {/* <!-- billing address --> */}
        {isEdit ?
        <div className="edit_shipping_address">
          <form action="#" onSubmit={(e) => handleFormSubmit(e)}>
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="">
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
              <div className="col-12 col-lg-6">
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
              <div className="col-12 col-lg-6">
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
              <div className="col-12 col-lg-6">
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
              <div className="col-12 col-lg-6">
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
              <div className="col-12 col-lg-6">
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
              <div className="col-12">
                <div className="mb-3">
                  <label className="check-container">
                    Mark as default address
                    <input type="checkbox" id="myCheck" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="col-12 d-flex align-items-center justify-content-end gap-2 billing-btn">
                <button className="btn warning cancel-btn" onClick={() => setIsEdit(false)}>Cancel</button>
                <button className="btn success save-btn" onClick={() => setIsEdit(false)}>Save</button>
              </div>
            </div>
          </form>
        </div>
        :
        <div className="shipping_address cart-item">
          <div className="shipping_address_item">
            <div className="address_name">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />
              <label className="form-check-label" for="exampleRadios1">
                Home
              </label>
              <span className="default">Default</span>
            </div>
            <div className="address_info">
              <h4 className="user_name">Nathan C. Collette</h4>
              <p className="address">4503 Villa DriveElkhart, IN 46516</p>
              <span>574-322-7161</span>
            </div>
            <div className="cta_btn">
              <button className="cta-remove">Remove</button>
              <button className="cta-edit" onClick={() => setIsEdit(true)}>Edit</button>
            </div>
          </div>
          <div className="shipping_address_item">
            <div className="address_name">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              />
              <label className="form-check-label" for="exampleRadios2">
                Work
              </label>
            </div>
            <div className="address_info">
              <h4 className="user_name">Nathan C. Collette</h4>
              <p className="address">4503 Villa DriveElkhart, IN 46516</p>
              <span>574-322-7161</span>
            </div>
            <div className="cta_btn">
              <button className="cta-remove">Remove</button>
              <button className="cta-edit" onClick={() => setIsEdit(true)}>Edit</button>
            </div>
          </div>
          <div className="cart-item-add-more">
            <a href="#" className="add-new-method">
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
        </div>}
        {/* <!-- billing address edit--> */}
        
      </div>
    </>
  );
};

export default BillingComponents;
