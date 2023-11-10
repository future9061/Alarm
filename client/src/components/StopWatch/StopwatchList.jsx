import React, { useEffect, useState } from "react";
import "../../style/StopWatch/StopwatchListCSS.scss";
function StopwatchList({ localData, toggle }) {
  let copy = JSON.parse(localData);

  const [split, setSplit] = useState([]);
  const array = [];

  useEffect(() => {
    if (copy.length > 0) {
      const first = copy[0].slice(-3);
      setSplit([Number(first)]);
    }
  }, [toggle]);

  useEffect(() => {
    array.map((_, i) => {
      const num2 = parseFloat((array[i + 1] - array[i]) / 1000);

      if (!isNaN(num2)) {
        setSplit((prevSplit) => [...prevSplit, Number(num2.toFixed(1))]);
      }
    });
  }, [localData, toggle]);

  return (
    <div className="listWrap">
      {copy.map((a, i) => {
        const millisecond = copy[i].slice(-1);
        const second = a.slice(-4, -2);
        const minute = a.slice(-8, -6);

        const num =
          copy[i].slice(0, 2) * 60 * 1000 +
          copy[i].replace(/[:]/g, "").slice(-4) * 1000;

        array.push(num);

        return (
          <li className="item" key={i}>
            <section>{`랩${i + 1}`}</section>
            <section>{split[i] && split[i]}</section>
            <section>{`${minute}:${second}.${millisecond}`}</section>
          </li>
        );
      })}
    </div>
  );
}

export default StopwatchList;
