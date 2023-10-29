import React from "react";
import "../../style/Alarm/ListCSS.scss";
import Delete from "./Delete";

function List() {
  const data = JSON.parse(localStorage.getItem("alarm")) || [];

  //localStorage 데이터 이미 지난시간 삭제, 시간순으로 정렬해서 다시 스토리지에 저장. 내일 확인해봐
  const now = new Date().getTime();
  const filterData = [];
  data.filter((a) => a > now && filterData.push(a));
  filterData.sort((a, b) => a - b);
  const copy = JSON.stringify([...filterData]);
  localStorage.setItem("alarm", copy);

  return (
    <ul className="List">
      {filterData ? (
        filterData.map((a, i) => {
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
              <Delete a={a} filterData={filterData} />
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
