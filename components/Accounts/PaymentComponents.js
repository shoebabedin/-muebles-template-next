import Link from "next/link";
import { useEffect, useState } from "react";

const PaymentComponents = () => {
  const [paymentData, setPaymentData] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  useEffect(() => {
    fetch("/assets/Data/paymentData.json")
      .then((res) => res.json())
      .then((differnet) => setPaymentData(differnet));
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsVisible2(false);
  };

  const NewPaymentCart = ({ item }) => {
    const [dropdown, setDropdown] = useState(false);
    return (
      <div className="payment_method_card_item">
        <div className="address_name position-relative">
          <div>
            <img
              src={(`/assets/images/payment/${item.img}.webp`)}
              alt=""
            />
            {item.default && <span className="default">Default</span>}
          </div>
          <span
            className={`dropbtn ${dropdown ? "show" : ""}`}
            onClick={() => setDropdown(!dropdown)}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6668 18C19.6668 18.9205 18.9206 19.6667 18.0002 19.6667C17.0797 19.6667 16.3335 18.9205 16.3335 18C16.3335 17.0795 17.0797 16.3333 18.0002 16.3333C18.9206 16.3333 19.6668 17.0795 19.6668 18Z"
                fill="#637381"
              />
              <path
                d="M19.6668 12.1667C19.6668 13.0871 18.9206 13.8333 18.0002 13.8333C17.0797 13.8333 16.3335 13.0871 16.3335 12.1667C16.3335 11.2462 17.0797 10.5 18.0002 10.5C18.9206 10.5 19.6668 11.2462 19.6668 12.1667Z"
                fill="#637381"
              />
              <path
                d="M19.6668 23.8333C19.6668 24.7538 18.9206 25.5 18.0002 25.5C17.0797 25.5 16.3335 24.7538 16.3335 23.8333C16.3335 22.9129 17.0797 22.1667 18.0002 22.1667C18.9206 22.1667 19.6668 22.9129 19.6668 23.8333Z"
                fill="#637381"
              />
            </svg>
            <div id="myDropdown" className="dropdown-content position-absolute">
              <Link href="#" className="edit">
                Edit
              </Link>
              <Link href="#" className="cancel">
                Delete
              </Link>
            </div>
          </span>
        </div>
        <p>**** **** **** 5678</p>
      </div>
    );
  };

  return (
    <>
      <div className="checkout_process_modal view_cart_modal payment_option">
        {/* <!-- billing address --> */}
        <div
          className={`shipping_address cart-item card-method ${
            isVisible ? "d-none" : "d-block"
          }`}
        >
          <div className="shipping_address_item">
            <div className="cart-item-add-more">
              <button
                href="#"
                className="add-new-method"
                onClick={() => setIsVisible(true)}
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
                      stroke="#016A78"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 1L9.99931 19"
                      stroke="#016A78"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Add New method
              </button>
            </div>
            <div className="payment_method_card">
              {paymentData.length > 0 && paymentData.map((item) => (
                <NewPaymentCart key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
        {/* <!-- billing address edit--> */}
        <div
          className={`shipping_address cart-item payment-address ${
            isVisible ? "d-block" : "d-none"
          } ${isVisible2 ? "d-none" : "d-block"}`}
        >
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
                <label className="form-check-label" for="paypal">
                  Payment with paypal
                </label>
              </div>
              <span>
                <img
                  src={("/assets/images/payment/paypal.webp")}
                  alt=""
                />
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
                <label className="form-check-label" for="credit_debit">
                  Credit / Debit Card
                </label>
              </div>
              <span>
                <img
                  src={("/assets/images/payment/mastercard.webp")}
                  alt=""
                />
                <img
                  src={("/assets/images/payment/visa.webp")}
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
              <button className="add_card" onClick={() => setIsVisible2(true)}>
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
                  id="credit_debit"
                  value="option1"
                />
                <label className="form-check-label" for="credit_debit">
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
        {/* <!-- add cart --> */}
        <div
          className={`edit_shipping_address edit_card_new  ${
            isVisible2 ? "d-block" : "d-none"
          }`}
        >
          <form action="#" onSubmit={(e) => handleFormSubmit(e)}>
            <div className="row">
              <div className="col-12">
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
              <div className="col-12">
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

              <div className="col-12 col-lg-6">
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
              <div className="col-12 col-lg-6">
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

              <div className="col-12 d-flex align-items-center justify-content-end gap-2">
                <button
                  className="btn warning payment-method-cancel"
                  onClick={() => setIsVisible(false)}
                >
                  Cancel
                </button>
                <button
                  className="btn success payment-method-cancel"
                  onClick={() => setIsVisible(false)}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PaymentComponents;
