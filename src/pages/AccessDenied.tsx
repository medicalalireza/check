import React from "react";
import { Link } from "react-router-dom";

const AccessDenied = () => {
  return (
    <div>
      <h2>تا اصلاع ثانوی ورود شما ممنوع می باشد</h2>
      <Link to="/check/">بازگشت به بازی</Link>
    </div>
  );
};

export default AccessDenied;
