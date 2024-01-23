import React from "react";
import "./Podcast.css";
import { Link } from "react-router-dom";
import Marshal from "../../images/3.jpg";
import Lily from "../../images/4.jpg";
import { FaDoorClosed } from "react-icons/fa6";
const Preview = () => {
  return (
    <div>
      <div className="preparation">
        <h2 className="ticket">
          <FaDoorClosed /> بلیت ورودی
        </h2>
        <div className="game">
          <mark className="opacity">
            به علت ولادت امام علی ورودی <b> {}صلواتی</b> می باشد
          </mark>
          <div className="price">
            <del className="offer">1,000,000 تومان</del>{" "}
            <strong className="free">رایگان</strong>
          </div>
          <Link to="../check/project/podcast">ورود به بازی</Link>
        </div>
        <div className="marshal">
          <img className="himymTitle" src={Marshal} />
        </div>
      </div>
    </div>
  );
};

export default Preview;
