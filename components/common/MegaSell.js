import Link from 'next/link';

const MegaSell = () => {
    return (
        <section className="mega_sell">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="image">
                <img
                  className="img-fluid"
                  src={("/assets/images/mega-sell/mega-sell.png")}
                  alt=""
                />
                <div className="overlay">
                  <h2>MEGA SALE <span>UPTO 65%</span></h2>
                  <h4>Modern Sofa Set</h4>
                  <p>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate
                  </p>
                  <Link href="/"> Shop Collection </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default MegaSell;