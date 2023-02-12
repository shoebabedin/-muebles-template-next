import FlipCountdown from "@rumess/react-flip-countdown";
import Products from "../common/Products";

const FlashSell = ({ data }) => {
  return (
    <section className="flash_sell">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="heading">
              <span>
                <i className="ph-lightning-fill"></i>
              </span>
              Flash Sell
            </h2>
            <div className="timing">
              <div id="countdown_dashboard">
                <FlipCountdown
                  theme="light"
                  size="xs-Extra small"
                  titlePosition="bottom"
                  yearTitle="Year"
                  monthTitle="Months"
                  dayTitle="Days"
                  hourTitle="Hours"
                  minuteTitle="Minutes"
                  secondTitle="Seconds"
                  endAt={"2024-01-30 01:26:58"} // Date/Time
                />
               
              </div>
            </div>
          </div>
          {/* products */}
          <Products data={data} />
        </div>
      </div>
    </section>
  );
};

export default FlashSell;
