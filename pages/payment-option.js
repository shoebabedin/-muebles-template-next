import { useRouter } from 'next/router';
import PaymentComponents from '../components/Accounts/PaymentComponents';
import ProfileSideNav from '../components/Accounts/ProfileSideNav';
import Breadcrumb from '../components/common/Breadcrumb';

const PaymentOption = () => {
  const router = useRouter();
  const location = router.asPath;
  const locationSplit = location.split("/");
  const bradecumName = locationSplit[1];
  return (
    <>
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <ProfileSideNav active={bradecumName} />
            </div>
            <div className="col-lg-9 signup">
              <div className="profile_body">
                <Breadcrumb title={bradecumName} />

                <h4>{bradecumName}</h4>
                <p>Add or view current payment options</p>
                <PaymentComponents />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentOption;