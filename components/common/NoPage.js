import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="notFound">
      <div className="container-fluid">
        <div className="col-12 text-center">
          <div className="img">
            <img
              className="img-fluid"
              src={require("./../../assets/images/4O4/error.png")}
              alt=""
            />
          </div>
          <h2>Something went WRONG!</h2>
          <p>
            The page you are looking for was moved, removed, renamed <br />
            or might never existed!
          </p>
          <Link to="/" className="align-items-center justify-content-center">
            <i className="ph-arrow-left"></i>Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoPage;
