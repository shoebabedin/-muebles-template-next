import Link from "next/link";
import { useState } from "react";

const ProfileSideNav = ({ active }) => {
  const [userImg, setUserImg] = useState("/assets/images/profile/profile.webp");
  const [UserName, setUserName] = useState("User Name");
  const [UserEmail, setUserEmail] = useState("example@email.com");
  return (
    <>
      <div className="profile_nav">
        <img className="img-fluid" src={userImg} alt="" />
        <h4 className="user_name">{UserName}</h4>
        <p className="user_email">{UserEmail}</p>
        <ul className="profile_navbar">
          <li className="profile_navbar_item">
            <Link
              href="/profile"
              className={`profile_navbar_link ${
                active === "profile" && "active"
              }`}
            >
              <i className="ph-user"></i>
              Profile
            </Link>
          </li>
          <li className="profile_navbar_item">
            <Link
              href="/billing-address"
              className={`profile_navbar_link ${
                active === "billing-address" && "active"
              }`}
            >
              <i className="ph-map-pin"></i>
              Billing Address
            </Link>
          </li>
          <li className="profile_navbar_item">
            <Link
              href="/payment-option"
              className={`profile_navbar_link ${
                active === "payment-option" && "active"
              }`}
            >
              <i className="ph-cardholder"></i>
              Payment Options
            </Link>
          </li>
          <li className="profile_navbar_item">
            <Link
              href="/track-order"
              className={`profile_navbar_link ${
                active === "track-order" && "active"
              }`}
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 6.375H4.5C4.15482 6.375 3.875 6.65482 3.875 7V8.875C3.875 9.22018 4.15482 9.5 4.5 9.5H19.5C19.8452 9.5 20.125 9.22018 20.125 8.875V7C20.125 6.65482 19.8452 6.375 19.5 6.375Z"
                    stroke="#016A78"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.875 9.5V17C18.875 17.1658 18.8092 17.3247 18.6919 17.4419C18.5747 17.5592 18.4158 17.625 18.25 17.625H5.75C5.58424 17.625 5.42527 17.5592 5.30806 17.4419C5.19085 17.3247 5.125 17.1658 5.125 17V9.5"
                    stroke="#016A78"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.125 12.625H13.875"
                    stroke="#016A78"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Track My Order
            </Link>
          </li>
          <li className="profile_navbar_item">
            <Link
              href="/order"
              className={`profile_navbar_link ${
                active === "order" && "active"
              }`}
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 6.375H4.5C4.15482 6.375 3.875 6.65482 3.875 7V8.875C3.875 9.22018 4.15482 9.5 4.5 9.5H19.5C19.8452 9.5 20.125 9.22018 20.125 8.875V7C20.125 6.65482 19.8452 6.375 19.5 6.375Z"
                    stroke="#016A78"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.875 9.5V17C18.875 17.1658 18.8092 17.3247 18.6919 17.4419C18.5747 17.5592 18.4158 17.625 18.25 17.625H5.75C5.58424 17.625 5.42527 17.5592 5.30806 17.4419C5.19085 17.3247 5.125 17.1658 5.125 17V9.5"
                    stroke="#016A78"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.125 12.625H13.875"
                    stroke="#016A78"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Order
            </Link>
          </li>
          <li className="profile_navbar_item">
            <Link
              href="/wishlist"
              className={`profile_navbar_link ${
                active === "wishlist" && "active"
              }`}
            >
              <i className="ph-heart"></i>
              My Wishlist
            </Link>
          </li>
          <li className="profile_navbar_item">
            <Link
              href="/reviews"
              className={`profile_navbar_link ${
                active === "reviews" && "active"
              }`}
            >
              <i className="ph-pencil-simple"></i>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProfileSideNav;
