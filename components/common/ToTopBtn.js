import React, { useEffect, useState } from "react";

const ToTopBtn = () => {
  const [top, setTop] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setTop(window.pageYOffset < 100 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <button
        onClick={toTop}
        type="button"
        className={`btn btn-danger btn-floating btn-lg ${
          top ? "visible" : "hidden"
        }`}
        id="btn-back-to-top"
      >
        <i className="ph-arrow-up"></i>
      </button>
    </>
  );
};

export default ToTopBtn;
