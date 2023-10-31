import React, { useEffect, useState } from "react";
import InputWrap from "./InputWrap";
import "../../style/Alarm/AlarmCSS.scss";
import List from "./List";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Modal from "./Modal";

function Alarm() {
  const [synch, setSynch] = useState(false); //useQuery enabled 토글
  const [modalTogg, setModaltogg] = useState(false);
  const localData = JSON.parse(localStorage.getItem("alarm")) || [];

  useEffect(() => {
    const timing = [];
    localData.map((a) => {
      const date = new Date();
      const now = date.getTime();
      timing.push(a - now);
      timing.sort((a, b) => a - b);

      if (a > now && localData.length !== 0) {
        setTimeout(() => {
          setSynch(true);
          timing.shift();
        }, Number(timing[0]));
      }
    });
  }, [localData]);

  const fetchAlarm = async () => {
    const data = localData[0];
    return await axios
      .get("/api/alarm", { params: { data } })
      .then((res) => {
        if (res.data.success) {
          setSynch(false);
          setModaltogg(true);
          const updateLocal = localData.slice(1, localData.length);
          localStorage.setItem("alarm", JSON.stringify(updateLocal));
          return res.data;
        }
      })
      .catch((err) => console.log(err));
  };

  const { data } = useQuery({
    queryKey: ["alarmKey"],
    queryFn: () => fetchAlarm(),
    enabled: synch,
  });

  return (
    <div className="Alarm">
      {modalTogg && (
        <Modal
          setModaltogg={setModaltogg}
          modalTogg={modalTogg}
          data={data.alarm}
        />
      )}
      <InputWrap />
      <List modalTogg={modalTogg} />
    </div>
  );
}

export default Alarm;
