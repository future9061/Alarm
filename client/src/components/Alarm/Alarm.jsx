import React from "react";
import Input from "./Input";
import "../../style/Alarm/AlarmCSS.scss";
import List from "./List";

//통신은 여기서
function Alarm() {
  return (
    <div className="Alarm">
      <Input />
      <List />
    </div>
  );
}

export default Alarm;
