import React from "react";
import "../../style/Alarm/InputCSS.scss";

//숫자 타입이 아니면 ""
//60이상 작성하면 경고문
//클릭한 input active

function Input() {
  return (
    <form className="time_wrapper">
      <div className="inner">
        <fieldset>
          <label>hours</label>
          <div>
            <input type="number" id="hours" placeholder="00" /> <span>:</span>
          </div>
        </fieldset>

        <fieldset>
          <label>minutes</label>
          <div>
            <input type="number" id="minutes" placeholder="00" /> <span>:</span>
          </div>
        </fieldset>

        <fieldset>
          <label>seconds</label>
          <div>
            <input type="number" id="seconds" placeholder="00" />
            <span style={{ textIndent: "-9999px" }}>:</span>
          </div>
        </fieldset>
      </div>
    </form>
  );
}

export default Input;
