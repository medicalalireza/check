import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import "./Memory.css";
import { Link } from "react-router-dom";
const Memory = () => {
  return (
    <div>
      <div className="header">
        <Navbar />
      </div>
      <div className="holder">
        <div className="boxes">
          <Link to="week/1">
            <div className="weeklyTop">
              <h2 className="title">حضور اول</h2>
            </div>
          </Link>
        </div>
        <div className="boxes">
          <Link to="exam">
            <div className="weeklyTop">
              <h2 className="exam">آزمون اول</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Memory;
