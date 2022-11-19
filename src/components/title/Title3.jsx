import React from "react";
import "./title.css";

const Title3 = () => {
  return (
    <>
      <div className="ref-container">
        <div className="col">
          <div className="row">
            <div className="ref">REF:</div>
            <input type="text" placeholder="Enter Reference No." />
          </div>
          <div className="row">
            <div className="date">DATE:</div>
            <input type="date" className="date" />
          </div>
        </div>
        <div className="col">
          <div className="row">
            <input type="text" placeholder="ادخل رقم الإشارة" />
            <div className="ref">:الإشارة</div>
          </div>
          <div className="row">
            <input type="date" className="date" />
            <div className="date">:التاريخ</div>
          </div>
        </div>
      </div>

      <div className="title-container">
        <h1 className="main-title3">
          شهادة اعتماد مخزن صلبوخ <br /> (صلبوخ جابرو ثقيل لأعمال الأسفلت)
        </h1>
      </div>
    </>
  );
};

export default Title3;
