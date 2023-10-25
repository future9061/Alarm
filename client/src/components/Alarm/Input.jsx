import React from "react";

function Input({ label, handleAlarm }) {
  return (
    <fieldset>
      <label>{label}</label>
      <div>
        <input
          id={label}
          placeholder="00"
          type="number"
          onChange={(e) => handleAlarm(e)}
        />
      </div>
      {label === "hours" && <span>:</span>}
    </fieldset>
  );
}

export default Input;
