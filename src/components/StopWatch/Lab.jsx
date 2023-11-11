import React from "react";

function Lab({ setToggle, localData, minute, second, milliSecond }) {
  const copy = JSON.parse(localData);
  const handleLab = (e) => {
    e.preventDefault();
    setToggle(false);

    const time = `0${minute}:0${second}.${milliSecond}`;
    copy.push(time);
    const localCopy = JSON.stringify(copy);
    localStorage.setItem("stopwatch", localCopy);
  };
  return (
    <button id="Lab" className="stopwatch-btn" onClick={(e) => handleLab(e)}>
      Lab
    </button>
  );
}

export default Lab;
