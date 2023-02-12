import { useRouter } from "next/router";
import BillingComponents from "../components/Accounts/BillingComponents";
import ProfileSideNav from "../components/Accounts/ProfileSideNav";
import Breadcrumb from "../components/common/Breadcrumb";

const BillingAddress = () => {
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
                <p>Add more address or view added your billing address</p>
                <BillingComponents />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingAddress;
