import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import "./SinglePod.css";
import suprise from "../../images/2.jpg";
import sound from "./1.mp3";
import secondAnnouncement from "./2.mp3";
const weeks = [{ id: 1, count: "هفته اول", title: "پیدایش ذره" }];

const SinglePod = () => {
  const { id } = useParams();
  const foundWeek = weeks.find((item) => item.id === Number(id));
  function play() {
    new Audio(sound).play();
  }
  function secondPlay() {
    new Audio(secondAnnouncement).play();
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
              <button className="voice" onClick={() => play()}>
                پخش معاقبه
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
