import React from "react";
import Navbar from "../components/Navbar/Navbar";
import tilteBackground from "../images/1.jpg";
const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <img className="himymTitle" src={tilteBackground} />
      </div>
    </div>
  );
};

export default Home;
