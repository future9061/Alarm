import React from "react";
import InputWrap from "./InputWrap";
import "../../style/Alarm/AlarmCSS.scss";
import List from "./List";

//useQuery로 조건 달아서 서버에 통신을 요청한다.
function Alarm() {
  return (
    <div className="Alarm">
      <InputWrap />
      <List />
    </div>
  );
}

export default Alarm;
