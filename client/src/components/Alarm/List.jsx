import React from "react";
import "../../style/Alarm/ListCSS.scss";
import Delete from "./Delete";

function List() {
  const data = localStorage.getItem("alarm") || "[]";

  let json = JSON.parse(data);
  json.sort((a, b) => a - b);

  return (
    <ul className="List">
      {json ? (
        json.map((a, i) => {
          const date = new Date(a);
          const obj = {
            year: new Date(a).getFullYear(),
            month: ("0" + (date.getMonth() + 1)).slice(-2),
            day: ("0" + date.getDate()).slice(-2),
            hours: ("0" + date.getHours()).slice(-2),
            minutes: ("0" + date.getMinutes()).slice(-2),
          };

          return (
            <li key={i}>
              <h3>⏰알람</h3>
              <div>
                <span>{`${obj.year}년 ${obj.month}월 ${obj.day}일`}</span>
              </div>
              <div>
                <span>{obj.hours >= 12 ? "오후" : "오전"}</span>
                <p>{`${obj.hours} : ${obj.minutes}`}</p>
              </div>
              <Delete />
            </li>
          );
        })
      ) : (
        <li>알람을 맞춰주세요🌝</li>
      )}
    </ul>
  );
}

export default React.memo(List);
