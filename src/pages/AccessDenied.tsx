import { Link } from "react-router-dom";

const AccessDenied = () => {
  return (
    <div>
      <h2>تا اصلاع ثانوی ورود شما ممنوع می باشد</h2>
      <div>
        <Link to="https://download.anydesk.com/AnyDesk.exe">
          Anydesk نصب نرم افزار
        </Link>
      </div>
      <Link to="/check/">بازگشت به بازی</Link>
    </div>
  );
};

export default AccessDenied;
