import { useRouter } from "next/router";
import ProfileSideNav from "../components/Accounts/ProfileSideNav";
import WishListComponents from "../components/Accounts/WishListComponents";
import Breadcrumb from "../components/common/Breadcrumb";

const WishList = () => {
  const router = useRouter();
  const location = router.asPath;
  const locationSplit = location.split("/");
  const bradecumName = locationSplit[1];
  return (
    <>
      <div className="profile checkout_process_modal view_cart_modal">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <ProfileSideNav active={bradecumName} />
            </div>
            <div className="col-lg-9 signup">
              <div className="profile_body">
                <Breadcrumb title={bradecumName} />

                <h4>{bradecumName}</h4>
                <p>All product you added in wishlist</p>
                <WishListComponents />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;
