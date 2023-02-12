import Link from "next/link";
import Products from "../common/Products";

const ShopPopular = (props) => {
  const { classProps, data } = props;
  return (
    <>
      <section className={`${classProps} shop_popular`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="heading">Shop by Popular</h2>
              <ul>
                {[
                  "Sofa",
                  "Coffee Table",
                  "Night Stand",
                  "Wall Hangar",
                  "Tea Table",
                  "Chair",
                  "Kitchen Cabinet",
                  "Office Desk"
                ].map((item, index) => (
                  <li key={index}>
                    <Link href="#">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* products */}
            <Products classProps={classProps} data={data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPopular;
