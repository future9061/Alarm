import React, { useEffect } from "react";

function Start({ setMilliSecond, toggle, setToggle }) {
  useEffect(() => {
    let interval;

    if (toggle) {
      interval = setInterval(() => {
        setMilliSecond((pre) => pre + 1);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [toggle]);

  return (
    <button
      id="Start"
      className="stopwatch-btn"
      onClick={(e) => {
        e.preventDefault();
        setToggle(true);
      }}
    >
      Start
    </button>
  );
}

export default Start;
