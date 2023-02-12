import Link from "next/link";
import { useRouter } from "next/router";
import TermsConditionPage from "../components/common/TermsConditionPage";

const ExchangeReturn = () => {
  const router = useRouter();
  const location = router.asPath;
  const locationSplit = location.split("/");
  const bradecumName = locationSplit[1];
  return (
    <>
      <div className="terms_condition_hero">
        <div className="container">
          <div className="row">
            <div className="col-12">
            <h2 className="heading">{bradecumName}</h2>
              <p className="version">Version 14.123.1</p>
              <p className="lastUpdate">Last updated May 2022</p>
              <p className="replaceVersion">
                Replaces the April 2022 version
                <Link href="#">(see previous version)</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="terms_condition_page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <ul className="term_side_nav">
              <li className={`${bradecumName === 'terms-condition' && 'active'}`}>
                  <Link href="/terms-condition">Terms & Conditions</Link>
                </li>
                <li className={`${bradecumName === 'privacy-policy' && 'active'}`}>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className={`${bradecumName === 'payment-policy' && 'active'}`}>
                  <Link href="/payment-policy">Payment Policy</Link>
                </li>
                <li className={`${bradecumName === 'exchange-return' && 'active'}`}>
                  <Link href="/exchange-return">Exchange & Return</Link>
                </li>
                <li className={`${bradecumName === 'shipping-policy' && 'active'}`}>
                  <Link href="/shipping-policy">Shipping Policy</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-9">
             <TermsConditionPage/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExchangeReturn;
