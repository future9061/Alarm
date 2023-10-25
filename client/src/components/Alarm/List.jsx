import React from "react";
import "../../style/Alarm/ListCSS.scss";

function List(props) {
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

export default List;
