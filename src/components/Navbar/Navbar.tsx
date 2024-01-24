import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaHouse } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";
import { BiSolidMemoryCard } from "react-icons/bi";
import { IoCallSharp } from "react-icons/io5";
import { GiDeathcab } from "react-icons/gi";
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <ul className="viewMobile">
          <li className="list-item">
            <Link to="/check/">
              <FaHouse />
              خانه
            </Link>
          </li>
          <li className="list-item">
            <Link to="/check/serivces">
              <GrServices />
              خدمات
            </Link>
          </li>
          <li className="list-item">
            <Link to="/check/||/memory">
              <BiSolidMemoryCard />
              خاطرات
            </Link>
          </li>
          <li className="list-item">
            <Link to="/check/project/preparation/">
              <GiDeathcab />
              برای مردن آماده ای؟
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
