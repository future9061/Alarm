import React from "react";
import "../../style/StopWatch/ListHeaderCSS.scss";
function ListHeader(props) {
  return (
    <div className="ListHeader">
      <h4>랩 </h4>
      <h4>스플릿</h4>
      <h4>전체</h4>
    </div>
  );
}

export default ListHeader;
