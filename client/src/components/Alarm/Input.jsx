import React from "react";
import "../../style/Alarm/InputCSS.scss";

//사용자 값 관리
//숫자 타입이 아니면 ""
//60이상 작성하면 경고문
//적용 누르면 list 생성

function Input() {
  return (
    <div className="time_wrapper">
      <form className="inner">
        <fieldset>
          <label>am or pm</label>
          <div>
            <select name="" id="">
              <option value="am">am</option>
              <option value="pm">pm</option>
            </select>
          </div>
        </fieldset>

        <fieldset>
          <label>Hours</label>
          <div>
            <input type="number" id="hours" placeholder="00" />
          </div>
          <span>:</span>
        </fieldset>

        <fieldset>
          <label>Minutes</label>
          <div>
            <input type="number" id="minutes" placeholder="00" />
          </div>
        </fieldset>
      </form>
      <div className="buttons">
        <button>적용</button>
        <button>취소</button>
      </div>
    </div>
  );
}

export default Input;
