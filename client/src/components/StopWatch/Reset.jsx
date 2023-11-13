import React from "react";
import "../../style/StopWatch/ButtonCSS.scss";
function Reset({ setToggle }) {
  const handleReset = (e) => {
    e.preventDefault();
    setToggle(false);
    const localReset = "[]";
    localStorage.setItem("stopwatch", localReset);
    window.location.reload();
  };

  return (
    <button
      id="Reset"
      className="stopwatch-btn"
      onClick={(e) => handleReset(e)}
    >
      Reset
    </button>
  );
}

export default Reset;
