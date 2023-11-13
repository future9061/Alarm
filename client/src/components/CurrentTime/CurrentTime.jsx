import React from "react";
import "../../style/CurrentTime/CurrentTimeCSS.scss";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function CurrentTime() {
  const fetchTime = async () => {
    return await axios
      .get("/api/time/current")
      .then((res) => {
        if (res.data.success) {
          return res.data.time;
        }
      })
      .catch((err) => console.log(err));
  };

  const { data } = useQuery({
    queryKey: ["currentTime"],
    queryFn: () => fetchTime(),
    refetchInterval: 500,
    staletime: 1000,
    cachetime: 1000,
  });

  const today = data && `${data.year}년 ${data.month}월 ${data.day}일`;
  const time = data && `${data.hour}시 ${data.minute}분 ${data.second}초`;

  return (
    <div className="CurrentTime">
      <div className="inner">
        <h3>현재시각</h3>
        <p>{today}</p>
        <span>{time}</span>
      </div>
    </div>
  );
}

export default CurrentTime;
