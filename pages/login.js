import Link from "next/link";
import { useState } from "react";


const Login = () => {
  const [view, setView] = useState(false);
  // const navigate = useNavigate()


  return (
    <div className="signup">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="modal-header border-0  mt-3">
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
              src={("/assets/images/signin/signin.png")}
              alt=""
            />
          </div>
          <div className="col-lg-6 form">
            <h2 className="heading">Sign In</h2>
            <div className="auth_btn">
              <button className="auth_google">
                <img
                  src={("/assets/images/signup/google.png")}
                  alt=""
                />
                Sign Up with Google
              </button>
              <button className="auth_facebook">
                <img
                  src={("/assets/images/signup/facebook.png")}
                  alt=""
                />
                Sign Up with Facebook
              </button>
            </div>
            <p className="desc">Or sign in using your email address</p>
            <form action="">
              <div className="row">
                <div className="col-lg-6">
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
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label for="password" className="form-label">
                      Password
                    </label>
                    <div className="position-relative">
                      <input
                        type={view ? "text" : "password"}
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        required
                      />
                      <span className="toggle_pass" onClick={() => setView(!view)}>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 5.125L18.25 18.875"
                            stroke="#016A78"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14.1012 14.3125C13.5277 14.8379 12.7774 15.128 11.9997 15.125C11.3689 15.1249 10.753 14.934 10.2328 14.5773C9.7126 14.2206 9.31252 13.7149 9.08513 13.1266C8.85775 12.5383 8.81372 11.8949 8.95882 11.2811C9.10392 10.6673 9.43136 10.1117 9.8981 9.6875"
                            stroke="#016A78"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.78125 7.35938C4.59375 8.96875 3.25 12 3.25 12C3.25 12 5.75 17.625 12 17.625C13.4645 17.6369 14.9108 17.2995 16.2188 16.6406"
                            stroke="#016A78"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M18.2966 15.211C19.9998 13.6875 20.7498 12 20.7498 12C20.7498 12 18.2498 6.37502 11.9998 6.37502C11.4579 6.37395 10.917 6.41838 10.3826 6.50783"
                            stroke="#016A78"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.5859 8.92969C13.2505 9.05561 13.8561 9.39427 14.3113 9.89457C14.7665 10.3949 15.0466 11.0297 15.1094 11.7031"
                            stroke="#016A78"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 text-center">
                  <div className="mb-3 termsCondition">
                    <input type="checkbox" id="terms" />
                    <label for="terms" className="form-label">
                      Remeber me
                      <Link href="/forgot-password">Forgot Password?</Link>
                    </label>
                  </div>
                </div>
                <div className="col-lg-12 text-center">
                  <button type="submit" className="btn" onClick={() => navigate("/")}>
                    Sign In
                  </button>
                  <p className="auth_page_link">
                    Don’t have an account? <Link href="/signup">Sign Up</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
