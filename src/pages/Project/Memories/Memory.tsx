import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import "./Memory.css";
import { Link } from "react-router-dom";
const Memory = () => {
    const divStyle = {
    color: 'green',
    padding: '10px',
    borderRadius: '5px'
  };
  
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
          <Link to="https://medicalalireza.github.io/quiz/">
            <div className="weeklyTop" style={divStyle}>
              <h2 className="exam">آزمون اول</h2>
            </div>
          </Link>
        </div>
        ;
      </div>
    </div>
  );
};

export default Memory;
