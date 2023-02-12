import { useRouter } from 'next/router';
import ProfileSideNav from '../components/Accounts/ProfileSideNav';
import ReviewsComponents from '../components/Accounts/ReviewsComponents';
import Breadcrumb from '../components/common/Breadcrumb';

const Reviews = () => {
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
                <p>You can add review for your products you purchased</p>
                <ReviewsComponents />
              </div>
            </div>
          </div>
        </div>
      </div>  
        </>
    );
};

export default Reviews;