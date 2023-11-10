import React, { useEffect, useState } from "react";
import "../../style/StopWatch/StopWatchCSS.scss";
import Time from "./Time";
import Start from "./Start";
import Reset from "./Reset";
import StopwatchList from "./StopwatchList";
import ListHeader from "./ListHeader";
import Lab from "./Lab";

function StopWatch() {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [milliSecond, setMilliSecond] = useState(0);
  const [toggle, setToggle] = useState(false);

  let localData = localStorage.getItem("stopwatch") || "[]";
  const copy = JSON.parse(localData);
  useEffect(() => {
    localData = localStorage.getItem("stopwatch") || "[]";
  }, [toggle]);

  useEffect(() => {
    if (copy.length > 0) {
      const lastTime = copy[copy.length - 1];
      setMilliSecond((pre) => pre + Number(lastTime.slice(-1)));
      setSecond((pre) => pre + Number(lastTime.slice(-4, -2)));
      setMinute((pre) => pre + Number(lastTime.slice(0, 2)));
    }
  }, []);

  return (
    <div className="StopWatch">
      <Time
        milliSecond={milliSecond}
        second={second}
        minute={minute}
        setMilliSecond={setMilliSecond}
        setMinute={setMinute}
        setSecond={setSecond}
      />
      <div className="buttons">
        <Start
          setToggle={setToggle}
          setMilliSecond={setMilliSecond}
          toggle={toggle}
        />
        <Lab
          milliSecond={milliSecond}
          second={second}
          minute={minute}
          setToggle={setToggle}
          localData={localData}
        />
        <Reset setToggle={setToggle} />
      </div>
      <ul className="stopwatchList">
        <ListHeader />
        <StopwatchList localData={localData} toggle={toggle} />
      </ul>
    </div>
  );
}

export default StopWatch;
