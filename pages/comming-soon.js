import FlipCountdown from "@rumess/react-flip-countdown";

const CommingSoon = () => {
  return (
    <section className="comming_soon">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-12 col-lg-4 order-2 order-lg-1">
            <img
              className="img-fluid"
              src={("/assets/images/comming-soon/coming-soon.webp")}
              alt=""
            />
          </div>
          <div className="col-12 col-lg-8 order-1 order-lg-2">
            <h2>Coming Soon</h2>
            <div id="countdown_dashboard">
              <FlipCountdown
               theme='light'
               size='large'
                titlePosition='bottom'
                yearTitle="Year"
                monthTitle="Months"
                dayTitle="Days"
                hourTitle="Hours"
                minuteTitle="Minutes"
                secondTitle="Seconds"
                endAt={"2024-01-30 01:26:58"} // Date/Time
              />
              {/* <div className="dash weeks_dash d-none">
                <span className="dash_title">weeks</span>
                <div className="digit-box">
                  <div className="digit">0</div>
                  <div className="digit">0</div>
                </div>
              </div>

              <div className="dash days_dash">
                <span className="dash_title">days</span>
                <div className="digit-box">
                  <div className="digit">0</div>
                  <div className="digit">0</div>
                </div>
              </div>

              <div className="dash hours_dash">
                <span className="dash_title">hours</span>
                <div className="digit-box">
                  <div className="digit">0</div>
                  <div className="digit">0</div>
                </div>
              </div>

              <div className="dash minutes_dash">
                <span className="dash_title">minutes</span>
                <div className="digit-box">
                  <div className="digit">0</div>
                  <div className="digit">0</div>
                </div>
              </div>

              <div className="dash seconds_dash">
                <span className="dash_title">seconds</span>
                <div className="digit-box">
                  <div className="digit">0</div>
                  <div className="digit">0</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommingSoon;
