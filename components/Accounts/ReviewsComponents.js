import { useState } from "react";
import StarRating from "./StarRating";

const ReviewsComponents = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div className="wishlist">
        {isVisible ? (
          <div className="track_my_order">
            <div className="row">
              <div className="col-lg-12">
                <div className="wishlist_review">
                  <div className="img_price d-flex align-items-start justify-content-between">
                    <div className="img">
                      <img
                        src={("/assets/images/cart-item/item.webp")}
                        alt=""
                      />
                    </div>
                    <div className="price">
                      <p>$1,598</p>
                    </div>
                  </div>
                  <h4 className="review_product_title">
                    Muebles Sofa - Blue Performance Fabric with customize
                    texture
                  </h4>
                  <p className="review_product_cetagory">Taylor Flet Gray</p>
                  <div className="rating-box">
                    <div className="review_star">
                      <StarRating />
                    </div>
                  </div>
                  <div className="review_product_preview">
                    <textarea
                      className="w-100"
                      name=""
                      id=""
                      cols=""
                      rows="10"
                      placeholder="Review"
                    ></textarea>
                  </div>
                  <div className="review_product_btn">
                    <button className="btn review_product_btn_cancel success-outliine" onClick={() => setIsVisible(false)}>
                      Cancel
                    </button>
                    <button className="btn review_product_btn_save success" onClick={() => setIsVisible(false)}>
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="wishlist_item">
                <div className="d-flex align-items-start gap-3">
                  <div className="img">
                    <img
                      className="img-fluid"
                      src={("/assets/images/cart-item/item.webp")}
                      alt=""
                    />
                  </div>
                  <div className="desc">
                    <h4>
                      Muebles Sofa - Blue Performance Fabric with customize
                      texture
                    </h4>
                    <p>Taylor Flet Gray</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <h2>$1,598</h2>
                      <span
                        className="give_review"
                        onClick={() => setIsVisible(true)}
                      >
                        Give review
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="wishlist_item">
                <div className="d-flex align-items-start gap-3">
                  <div className="img">
                    <img
                      className="img-fluid"
                      src={("/assets/images/cart-item/item1.webp")}
                      alt=""
                    />
                  </div>
                  <div className="desc">
                    <h4>
                      Muebles Sofa - Blue Performance Fabric with customize
                      texture
                    </h4>
                    <p>Taylor Flet Gray</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <h2>$1,598</h2>
                      <span className="give_review" onClick={() => setIsVisible(true)}>Give review</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ReviewsComponents;
