import { Link } from "react-router-dom";

const AccessDenied = () => {
  return (
    <div>
      <div>
        <Link to="/check/project/average">کارنامه سبز</Link>
      </div>
      <Link to="/check/">بازگشت به بازی</Link>
    </div>
  );
};

export default AccessDenied;
