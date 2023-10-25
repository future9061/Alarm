import React from "react";
import "../../style/Alarm/ListCSS.scss";

function List(props) {
  //랜더링 시 로컬에 저장된 알람 배열을 가져와서 알람 리스트를 보여준다
  return (
    <ul className="List">
      <li>
        <h3>알람</h3>
        <div>
          <span>오전</span>
          <p>09:30</p>
        </div>
        <div className="buttons">
          <div></div>
        </div>
      </li>
    </ul>
  );
}

export default React.memo(List);
