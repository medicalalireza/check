import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import "./SingleMemory.css";
import CameraMan1 from "../../../images/Week1/Camera-man-1.jpg";
import CameraMan2 from "../../../images//Week1/camera-man-2.jpg";
import Agent from "../../../images/Week1/stood-man-waiting-for-the-victim.jpg";
import Victim from "../../../images/Week1/victim-signing-the-box.jpg";
const SingleMemory = () => {
  const weekCaption =
    "مامور صبحگاه به قصد تحویل مرسوله راهی مقصد می شود، در انتظار او جناب آقای علیرضا قربانی است. مرسوله امضا شد و بسته با موفقیت تحویل داده شد.";
  return (
    <div>
      <div className="header">
        <Navbar />
      </div>
      <div className="thebox">
        <div className="inforweek">
          <div className="weekTitle">
            <h2>نام هفته</h2>

            <mark>پیدایش ذره</mark>
          </div>
          <div className="weekDate">
            <h2>تاریخ هفته</h2>
            مورخ 4 بهمن 1402 هجری خورشیدی
          </div>
          <div className="weekCaption">
            <h2>توضیحات</h2>
            <textarea
              name=""
              id=""
              cols={20}
              rows={4}
              value={weekCaption}
              disabled
            ></textarea>
          </div>
          <img src={Agent} className="photography" />
          <img src={CameraMan1} className="photography" />
          <img src={CameraMan2} className="photography" />
          <img src={Victim} className="photography" />
        </div>
      </div>
    </div>
  );
};

export default SingleMemory;
