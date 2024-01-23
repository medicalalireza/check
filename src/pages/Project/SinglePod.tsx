import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import "./SinglePod.css";
import suprise from "../../images/2.jpg";
import sound from "./1.mp3";
const weeks = [{ id: 1, count: "هفته اول", title: "آغاز جریان" }];

const SinglePod = () => {
  const { id } = useParams();
  const foundWeek = weeks.find((item) => item.id === Number(id));
  function play() {
    new Audio(sound).play();
  }
  return (
    <div>
      <div className="header">
        <Navbar />
      </div>
      <div className="episodes">
        {foundWeek && (
          <div className="hero">
            <div className="contentGoes">
              <h2 className="trick">
                {foundWeek.count}:{foundWeek.title}
              </h2>
              <button className="voice" onClick={() => play()}>
                پخش صدای مرگ
              </button>
              <img className="suprise" src={suprise} alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SinglePod;
