import React from 'react';
import Products from '../common/Products';

const LatestArrival = ({classProps, data}) => {
    return (
        <section className="flash_sell letest_arrival">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="heading">Latest Arrivals</h2>
            </div>
          {/* products */}
          <Products classProps="classProps" data={data}/>
          </div>
        </div>
      </section>
    );
};

export default LatestArrival;