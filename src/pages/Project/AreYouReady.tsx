import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Preview from "./Preview";
import "./Podcast.css";
const Home = () => {
  return (
    <div>
      <div className="header">
        <Navbar />
      </div>
      <div>
        <Preview />
      </div>
    </div>
  );
};

export default Home;
