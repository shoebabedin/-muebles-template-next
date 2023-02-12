import Link from "next/link";

const ForgotPassword = () => {
  return (
    <div className="signup">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="modal-header border-0 mt-3">
              <Link className="navbar-brand mx-auto" href="/">
                <img src={("/assets/images/logo/logo.png")} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 desktop">
            <img
              className="img-fluid"
              src={("/assets/images/forgot-password/forgotPass.png")}
              alt=""
            />
          </div>
          <div className="col-lg-6 form forgotForm">
            <h2 className="heading">Forgot Password?</h2>
            <p className="desc">
              Enter the email address you used when you joined and we'll send
              you instructions to reset your password.
            </p>
            <form action="">
              <div className="row">
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="example@info"
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn forgot-pass">
                    Send
                  </button>
                  <Link href="/login" className="backTOSignIn">
                    back to sign in
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
