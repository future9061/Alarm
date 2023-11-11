import React, { useEffect } from "react";
import "../../style/StopWatch/TimeCSS.scss";

function Time({
  milliSecond,
  second,
  minute,
  setMinute,
  setMilliSecond,
  setSecond,
}) {
  useEffect(() => {
    if (10 <= milliSecond) {
      setMilliSecond(0);
      setSecond((second) => (second += 1));
    }
    if (60 <= second) {
      setSecond(0);
      setMinute((minute) => (minute += 1));
    }
  }, [milliSecond]);

  return (
    <div className="Time">
      <h1>
        {minute < 10 ? "0" + minute : minute}:
        {second < 10 ? "0" + second : second}.{milliSecond}
      </h1>
    </div>
  );
}

export default Time;
