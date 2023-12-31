import React from "react";

function Buttons({ hours, minutes, digit }) {
  const alarm = window.localStorage.getItem("alarm") || "[]";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (digit === "pm" && hours !== 12) {
      hours += 12;
    } else if (digit === "am" && hours === 12) {
      hours = 24;
    }

    if ((!hours && hours !== 0) || (!minutes && minutes !== 0)) {
      alert("시간을 선택해주세요");
      return;
    }

    //현재 시간 한국 기준으로 구하기
    const now = new Date().getTime() + 9 * 60 * 60 * 1000;

    //알람 시간 한국 기준으로 구하기
    const date = new Date();
    date.getTime();
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(0);
    const timestamp = date.getTime() + 9 * 60 * 60 * 1000;

    if (timestamp < now) {
      alert("이미 지난 시간입니다");
      window.location.reload();
      return;
    }

    const data = JSON.parse(alarm);

    const overlapping = data.some((a, _) => {
      const localTime = new Date(a);
      const userTime = new Date(timestamp);

      if (
        localTime.getHours(date) === userTime.getHours(userTime) &&
        localTime.getMinutes(date) === userTime.getMinutes(userTime)
      ) {
        return true;
      } else {
        return false;
      }
    });

    if (overlapping) {
      alert("이미 설정한 시간입니다.");
      window.location.reload();
      return;
    }

    data.push(timestamp);

    window.localStorage.setItem("alarm", JSON.stringify(data));
    alert("알람이 설정되었습니다!");
    window.location.reload();
  };

  return (
    <div className="buttons">
      <button onClick={(e) => handleSubmit(e)}>적용</button>
      <button>취소</button>
    </div>
  );
}

export default React.memo(Buttons);
