import React from "react";
import "../../style/Alarm/ListCSS.scss";

function Delete({ a, filterData }) {
  const handleDelete = (e) => {
    const updateData = [];
    filterData.filter((n) => {
      if (String(n) !== e.target.id) {
        updateData.push(n);
      }
    });
    const localData = JSON.stringify(updateData);
    localStorage.setItem("alarm", localData);
    window.location.reload();
  };

  return (
    <div className="delete">
      <button id={a} onClick={(e) => handleDelete(e)}>
        삭제
      </button>
    </div>
  );
}

export default Delete;
