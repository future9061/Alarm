import React from "react";
import "../../style/StopWatch/StopwatchListCSS.scss";
function StopwatchList(props) {
  return (
    <li className="item">
      <section>랩</section>
      <section>스플릿</section>
      <section>전체</section>
    </li>
  );
}

export default StopwatchList;
