import React from "react";

function Buttons({ hours, minutes, digit }) {
  const alarmTime = new Date();
  const alarm = window.localStorage.getItem("alarm") || "[]";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (digit === "pm" && hours !== 12) {
      hours += 12;
    } else if (digit === "am" && hours === 12) {
      hours += 12;
    }

    alarmTime.setHours(hours);
    alarmTime.setMinutes(minutes);

    const timeStamp = alarmTime.getTime();
    const now = new Date().getTime();

    if (!hours && !minutes) {
      alert("시간을 선택해주세요");
      return;
    }

    if (timeStamp < now) {
      alert("이미 지난 시간입니다");
      window.location.reload();
      return;
    }

    const data = JSON.parse(alarm);

    const overlapping = data.some((a) => {
      a = String(a).slice(0, 8);
      const time = String(timeStamp).slice(0, 8);
      if (a === time) {
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

    data.push(timeStamp);

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
