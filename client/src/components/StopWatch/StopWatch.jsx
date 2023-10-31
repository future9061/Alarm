import React from "react";
import "../../style/StopWatch/StopWatchCSS.scss";
import Time from "./Time";
import Start from "./Start";
import Stop from "./Stop";
import Reset from "./Reset";
import StopwatchList from "./StopwatchList";
import ListHeader from "./ListHeader";

function StopWatch(props) {
  return (
    <div className="StopWatch">
      <Time />
      <div className="buttons">
        <Start />
        <Stop />
        <Reset />
      </div>
      <ul className="stopwatchList">
        <ListHeader />
        <StopwatchList />
        <StopwatchList />
        <StopwatchList />
      </ul>
    </div>
  );
}

export default StopWatch;
