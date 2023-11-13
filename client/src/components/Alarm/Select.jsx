import React from "react";

function Select({ setDigit }) {
  return (
    <fieldset>
      <label>am or pm</label>
      <div>
        <select
          name="digit"
          id="digit"
          onChange={(e) => setDigit(e.target.value)}
        >
          <option value="am">am</option>
          <option value="pm">pm</option>
        </select>
      </div>
    </fieldset>
  );
}

export default React.memo(Select);
