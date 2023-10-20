import React from "react";
import "../../style/CurrentTime/CurrentTimeCSS.scss";

function CurrentTime() {
  return (
    <div className="CurrentTime">
      <div className="inner">
        <h3>현재시각</h3>
        <p>20:20:20</p>
        <small>2023년 10월 20일 금요일</small>
      </div>
    </div>
  );
}

export default CurrentTime;
