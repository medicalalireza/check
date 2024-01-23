import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import suprise from "../../images/2.jpg";
const Podcast = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="contentGoes">
        <img src={suprise} alt="" />
      </div>
    </div>
  );
};

export default Podcast;
