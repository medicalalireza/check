import React from "react";
import "./Average.css";
import { Link } from "react-router-dom";
const Average = () => {
  return (
    <div>
      <div className="table-container">
        <div className="data-row">
          <div className="header"> # </div>
          <div className="data"> 1 </div>
        </div>
        <div className="data-row">
          <div className="header"> ملیت </div>
          <div className="data"> 3 </div>
        </div>
        <div className="data-row">
          <div className="header"> بیماری </div>
          <div className="data"> 4 </div>
        </div>
        <div className="data-row">
          <div className="header"> ناگفته </div>
          <div className="data"> 4 </div>
        </div>
        <div className="data-row">
          <div className="header"> جغرافیا </div>
          <div className="data wrong"> 3 </div>
        </div>
        <div className="data-row">
          <div className="header"> فیزیک </div>
          <div className="data"> 4 </div>
        </div>
        <div className="data-row">
          <div className="header"> تولد </div>
          <div className="data"> 4 </div>
        </div>
        <div className="data-row">
          <div className="header"> زبان </div>
          <div className="data wrong"> 1 </div>
        </div>
        <div className="data-row">
          <div className="header"> اخبار </div>
          <div className="data"> 1 </div>
        </div>
        <div className="data-row">
          <div className="header"> نیوتون </div>
          <div className="data"> 3 </div>
        </div>
        <div className="data-row">
          <div className="header "> الفبای موسیقی </div>
          <div className="data wrong"> 3 </div>
        </div>
      </div>

      <div className="mb-3">
        <h2>آزمون شما با موفقیت بررسی و تحلیل گردید</h2>
        <p>شما با نمره 70% موفق به پاس کردن شدید</p>
        <button>مرحله بعد: حریم مراسم</button>
      </div>
    </div>
  );
};

export default Average;
