import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const VerifyEmail = () => {
  const [userEmail, setUserEmail] = useState("your@gmail.com");

  
  useEffect(() => {
    const inputElements = [...document.querySelectorAll("input.code-input")];
    inputElements.forEach((ele, index) => {
      ele.addEventListener("keydown", (e) => {
        if (e.keyCode === 8 && e.target.value === "")
          inputElements[Math.max(0, index - 1)].focus();
      });
      ele.addEventListener("input", (e) => {
        const [first, ...rest] = e.target.value;
        e.target.value = first ?? "";
        const lastInputBox = index === inputElements.length - 1;
        const didInsertContent = first !== undefined;
        if (didInsertContent && !lastInputBox) {
          inputElements[index + 1].focus();
          inputElements[index + 1].value = rest.join("");
          inputElements[index + 1].dispatchEvent(new Event("input"));
        }
      });
    });

    function onSubmit(e) {
      e.preventDefault();
      const code = inputElements.map(({ value }) => value).join("");
     
    }
  }, []);

  return (
    <div className="signup">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="modal-header border-0 mt-3">
              <Link className="navbar-brand mx-auto" href="/">
                <img
                  className="img-fluid"
                  src={("/assets/images/logo/logo.png")}
                  alt=""
                />
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
          <div className="col-lg-6 form forgotForm emailValidation">
            <h2 className="heading">Verify your email</h2>
            <p className="desc">
              Please enter 4 digit code sent to {userEmail}
            </p>
            <form action="" className="verify_email">
              <div className="row">
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Verification Code
                    </label>
                    <div className="d-flex gap-3 input_item">
                      <input type={"text"} className="form-control code-input" required />
                      <input type={"text"} className="form-control code-input" required />
                      <input type={"text"} className="form-control code-input" required />
                      <input type={"text"} className="form-control code-input" required />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <Button className="backTOSignIn resend">Resend</Button>
                  <Button type="submit" className="btn forgot-pass">
                    Verify & Proceed
                  </Button>
                  <Button className="backTOSignIn resend" aria-disabled>
                    change mail
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
