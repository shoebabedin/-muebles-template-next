import { Offcanvas } from "react-bootstrap";

const FilterCanvas = ({show, setShow}) => {
  const handleClose = () => setShow(false);
 
  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={"start"}
        className="cart-bag"
      >
        <Offcanvas.Header closeButton>
          <h5 className="offcanvas-title" id="offcanvasWithBackdropLabel">
            Filter
          </h5>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="cart_added">
            <div className="filter_result_added">
              <div className="filter_result_added_item">
                Price: $250-$500
                <span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5999 2.3999L2.3999 9.5999"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.5999 9.5999L2.3999 2.3999"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="filter_result_added_item">
                Color: Black
                <span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5999 2.3999L2.3999 9.5999"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.5999 9.5999L2.3999 2.3999"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="filter_result_added_item">
                Availability: Ready to ship
                <span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5999 2.3999L2.3999 9.5999"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.5999 9.5999L2.3999 2.3999"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="filter_result_added_item">
                Material: Gloden wool
                <span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5999 2.3999L2.3999 9.5999"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.5999 9.5999L2.3999 2.3999"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="filter_result_added_item">
                Features: Sleeper
                <span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5999 2.3999L2.3999 9.5999"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.5999 9.5999L2.3999 2.3999"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="filter_result_added_item">
                Size: 36”-42”
                <span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5999 2.3999L2.3999 9.5999"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.5999 9.5999L2.3999 2.3999"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="filter_result_clear">Clear All</div>
            <div className="accordion" id="accordionExample">
              {/* <!-- Price --> */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Price
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="refine-category">
                      <ul className="custom-scrollbar">
                        <li>
                          <label className="check-container">
                            <input type="checkbox" />
                            <span className="checkmark">
                              <svg
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.4375 1.125L3.85156 5.5L1.5625 3.3125"
                                  stroke="#E85342"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <p>Under $250</p>
                          </label>
                        </li>
                        <li>
                          <label className="check-container">
                            <input type="checkbox" />
                            <span className="checkmark">
                              <svg
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.4375 1.125L3.85156 5.5L1.5625 3.3125"
                                  stroke="#E85342"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <p>$250-$500</p>
                          </label>
                        </li>
                        <li>
                          <label className="check-container">
                            <input type="checkbox" />
                            <span className="checkmark">
                              <svg
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.4375 1.125L3.85156 5.5L1.5625 3.3125"
                                  stroke="#E85342"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <p>$500-$1000</p>
                          </label>
                        </li>
                        <li>
                          <label className="check-container">
                            <input type="checkbox" />
                            <span className="checkmark">
                              <svg
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.4375 1.125L3.85156 5.5L1.5625 3.3125"
                                  stroke="#E85342"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <p>$1000-$2000</p>
                          </label>
                        </li>
                        <li>
                          <label className="check-container">
                            <input type="checkbox" />
                            <span className="checkmark">
                              <svg
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.4375 1.125L3.85156 5.5L1.5625 3.3125"
                                  stroke="#E85342"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <p>Above $2000</p>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Color --> */}

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Color
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="refine-category">
                      <ul className="custom-scrollbar">
                        <li>
                          <label className="check-container">
                            <input type="checkbox" />
                            <span className="checkmark">
                              <svg
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.4375 1.125L3.85156 5.5L1.5625 3.3125"
                                  stroke="#E85342"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <p>Black</p>
                          </label>
                        </li>
                        <li>
                          <label className="check-container">
                            <input type="checkbox" />
                            <span className="checkmark">
                              <svg
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.4375 1.125L3.85156 5.5L1.5625 3.3125"
                                  stroke="#E85342"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <p>Blue</p>
                          </label>
                        </li>
                        <li>
                          <label className="check-container">
                            <input type="checkbox" />
                            <span className="checkmark">
                              <svg
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.4375 1.125L3.85156 5.5L1.5625 3.3125"
                                  stroke="#E85342"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <p>Brown</p>
                          </label>
                        </li>
                        <li>
                          <label className="check-container">
                            <input type="checkbox" />
                            <span className="checkmark">
                              <svg
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.4375 1.125L3.85156 5.5L1.5625 3.3125"
                                  stroke="#E85342"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <p>Gray</p>
                          </label>
                        </li>
                        <li>
                          <label className="check-container">
                            <input type="checkbox" />
                            <span className="checkmark">
                              <svg
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.4375 1.125L3.85156 5.5L1.5625 3.3125"
                                  stroke="#E85342"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <p>Green</p>
                          </label>
                        </li>
                        <li>
                          <label className="check-container">
                            <input type="checkbox" />
                            <span className="checkmark">
                              <svg
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.4375 1.125L3.85156 5.5L1.5625 3.3125"
                                  stroke="#E85342"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <p>Pink</p>
                          </label>
                        </li>
                        <li>
                          <label className="check-container">
                            <input type="checkbox" />
                            <span className="checkmark">
                              <svg
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.4375 1.125L3.85156 5.5L1.5625 3.3125"
                                  stroke="#E85342"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <p>White</p>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Features --> */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Features
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="refine-category">
                      <ul className="custom-scrollbar">
                        <li>
                          <label className="check-container">
                            <input type="checkbox" />
                            <span className="checkmark">
                              <svg
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.4375 1.125L3.85156 5.5L1.5625 3.3125"
                                  stroke="#E85342"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <p>Sleeper</p>
                          </label>
                        </li>
                        <li>
                          <label className="check-container">
                            <input type="checkbox" checked="" />
                            <span className="checkmark">
                              <svg
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.4375 1.125L3.85156 5.5L1.5625 3.3125"
                                  stroke="#E85342"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <p>Modular</p>
                          </label>
                        </li>
                        <li>
                          <label className="check-container">
                            <input type="checkbox" />
                            <span className="checkmark">
                              <svg
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.4375 1.125L3.85156 5.5L1.5625 3.3125"
                                  stroke="#E85342"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <p>Small Space</p>
                          </label>
                        </li>
                        <li>
                          <label className="check-container">
                            <input type="checkbox" />
                            <span className="checkmark">
                              <svg
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.4375 1.125L3.85156 5.5L1.5625 3.3125"
                                  stroke="#E85342"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <p>Deep Seated</p>
                          </label>
                        </li>
                        <li>
                          <label className="check-container">
                            <input type="checkbox" />
                            <span className="checkmark">
                              <svg
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.4375 1.125L3.85156 5.5L1.5625 3.3125"
                                  stroke="#E85342"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <p>Armless</p>
                          </label>
                        </li>
                        <li>
                          <label className="check-container">
                            <input type="checkbox" />
                            <span className="checkmark">
                              <svg
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.4375 1.125L3.85156 5.5L1.5625 3.3125"
                                  stroke="#E85342"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <p>Tufted</p>
                          </label>
                        </li>
                        <li>
                          <label className="check-container">
                            <input type="checkbox" />
                            <span className="checkmark">
                              <svg
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.4375 1.125L3.85156 5.5L1.5625 3.3125"
                                  stroke="#E85342"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <p>Concave</p>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Material --> */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Material
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="refine-category">
                      <ul id="list" className="product-texture">
                        <li className="product-texture-item active">
                          <img
                            className="img-fluid"
                            src={("/assets/images/texture/item1.png")}
                            alt=""
                          />
                        </li>
                        <li className="product-texture-item">
                          <img
                            className="img-fluid"
                            src={("/assets/images/texture/item2.png")}
                            alt=""
                          />
                        </li>
                        <li className="product-texture-item">
                          <img
                            className="img-fluid"
                            src={("/assets/images/texture/item3.png")}
                            alt=""
                          />
                        </li>
                        <li className="product-texture-item">
                          <img
                            className="img-fluid"
                            src={("/assets/images/texture/item4.png")}
                            alt=""
                          />
                        </li>
                        <li className="product-texture-item">
                          <img
                            className="img-fluid"
                            src={("/assets/images/texture/item5.png")}
                            alt=""
                          />
                        </li>
                        <li className="product-texture-item">
                          <img
                            className="img-fluid"
                            src={("/assets/images/texture/item6.png")}
                            alt=""
                          />
                        </li>
                        <li className="product-texture-item">
                          <img
                            className="img-fluid"
                            src={("/assets/images/texture/item7.png")}
                            alt=""
                          />
                        </li>
                        <li className="product-texture-item">
                          <img
                            className="img-fluid"
                            src={("/assets/images/texture/item8.png")}
                            alt=""
                          />
                        </li>
                        <li className="product-texture-item">
                          <img
                            className="img-fluid"
                            src={("/assets/images/texture/item9.png")}
                            alt=""
                          />
                        </li>
                        <li className="product-texture-item">
                          <img
                            className="img-fluid"
                            src={("/assets/images/texture/item10.png")}
                            alt=""
                          />
                        </li>
                        <li className="product-texture-item">
                          <img
                            className="img-fluid"
                            src={("/assets/images/texture/item11.png")}
                            alt=""
                          />
                        </li>
                        <li className="product-texture-item">
                          <img
                            className="img-fluid"
                            src={("/assets/images/texture/item12.png")}
                            alt=""
                          />
                        </li>
                        <li className="product-texture-item">
                          <img
                            className="img-fluid"
                            src={("/assets/images/texture/item13.png")}
                            alt=""
                          />
                        </li>
                        <li className="product-texture-item">
                          <img
                            className="img-fluid"
                            src={("/assets/images/texture/item14.png")}
                            alt=""
                          />
                        </li>
                        <li className="product-texture-item">
                          <img
                            className="img-fluid"
                            src={("/assets/images/texture/item15.png")}
                            alt=""
                          />
                        </li>
                        <li className="product-texture-item">
                          <img
                            className="img-fluid"
                            src={("/assets/images/texture/item16.png")}
                            alt=""
                          />
                        </li>
                        <li className="product-texture-item">
                          <img
                            className="img-fluid"
                            src={("/assets/images/texture/item17.png")}
                            alt=""
                          />
                        </li>
                        <li className="product-texture-item">
                          <img
                            className="img-fluid"
                            src={("/assets/images/texture/item18.png")}
                            alt=""
                          />
                        </li>
                        <li className="product-texture-item">
                          <img
                            className="img-fluid"
                            src={("/assets/images/texture/item19.png")}
                            alt=""
                          />
                        </li>
                        <li className="product-texture-item">
                          <img
                            className="img-fluid"
                            src={("/assets/images/texture/item20.png")}
                            alt=""
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Size --> */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Size
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="refine-category">
                      <ul className="custom-scrollbar">
                        <li>
                          <label className="check-container">
                            <input type="checkbox" />
                            <span className="checkmark">
                              <svg
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.4375 1.125L3.85156 5.5L1.5625 3.3125"
                                  stroke="#E85342"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <p>36" - 42"</p>
                          </label>
                        </li>
                        <li>
                          <label className="check-container">
                            <input type="checkbox" checked="" />
                            <span className="checkmark">
                              <svg
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.4375 1.125L3.85156 5.5L1.5625 3.3125"
                                  stroke="#E85342"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <p>43" - 48"</p>
                          </label>
                        </li>
                        <li>
                          <label className="check-container">
                            <input type="checkbox" />
                            <span className="checkmark">
                              <svg
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.4375 1.125L3.85156 5.5L1.5625 3.3125"
                                  stroke="#E85342"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <p>49" - 54"</p>
                          </label>
                        </li>
                        <li>
                          <label className="check-container">
                            <input type="checkbox" />
                            <span className="checkmark">
                              <svg
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.4375 1.125L3.85156 5.5L1.5625 3.3125"
                                  stroke="#E85342"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <p>55" - 60"</p>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default FilterCanvas;
