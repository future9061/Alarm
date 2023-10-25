import React, { useEffect, useState } from "react";
import "../../style/Alarm/InputCSS.scss";
import Input from "./Input";
import Select from "./Select";
import Buttons from "./Buttons";

//만약 선택한 시간이 현재 시간보다 이르면 return
function InputWrap() {
  const [digit, setDigit] = useState("am");
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [msg, setMsg] = useState("");

  const handleAlarm = (e) => {
    if (e.target.id === "hours") {
      if (e.target.value > 12) {
        setMsg("12시간을 넘길 수 없습니다");
        e.target.value = null;
        return;
      } else {
        setMsg("");
        setHours(Number(e.target.value));
        return;
      }
    } else {
      if (e.target.value > 59) {
        setMsg("59분을 넘길 수 없습니다");
        e.target.value = null;
        return;
      } else {
        setMsg("");
        setMinutes(Number(e.target.value));
        return;
      }
    }
  };

  return (
    <div className="time_wrapper">
      <form className="inner">
        <Select setDigit={setDigit} digit={digit} />
        <Input label="hours" handleAlarm={handleAlarm} />
        <Input label="minutes" handleAlarm={handleAlarm} />
        <p className="err">{msg}</p>
      </form>
      <Buttons hours={hours} minutes={minutes} digit={digit} />
    </div>
  );
}

export default InputWrap;
