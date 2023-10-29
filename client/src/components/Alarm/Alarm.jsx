import React, { useEffect, useState } from "react";
import InputWrap from "./InputWrap";
import "../../style/Alarm/AlarmCSS.scss";
import List from "./List";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Modal from "./Modal";
//useQuery로 조건 달아서 서버에 통신을 요청한다.
//local에 있는 알람 리스트 가져와서
//해당 알람시간과 현재 알람시간을 빼
//뺀 시간만큼 시간이 지나면 통신해야하는데
//localStorage 데이터 만큼 map 돌려야해

function Alarm() {
  const [synch, setSynch] = useState(false);
  const localData = JSON.parse(localStorage.getItem("alarm")) || [];

  localData.map((a) => {
    const now = new Date().getTime();
    const time1 = String(a).slice(0, -5) + "00000";
    const timing = Number(time1) - now;

    if (a > now) {
      setTimeout(() => {
        setSynch(true);
      }, timing);
    }
  });

  const fetchAlarm = async () => {
    const data = localData[0];
    return await axios
      .get("/api/alarm", { params: { data } })
      .then((res) => {
        if (res.data.success) {
          return res.data.alarm;
        }
      })
      .catch((err) => console.log(err));
  };

  const { data, onSuccess } = useQuery({
    queryKey: ["alarmKey"],
    queryFn: () => fetchAlarm(),
    enabled: synch,
  });

  return (
    <div className="Alarm">
      <Modal />
      <InputWrap />
      <List />
    </div>
  );
}

export default Alarm;
