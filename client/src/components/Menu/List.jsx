import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function List({ data }) {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const handleActive = (elem, idx) => {
    setActive(idx);
    navigate(`${elem.path}`);
  };

  return (
    <>
      {data.map((a, i) => (
        <li
          className={active === i && "active"}
          key={i}
          onClick={() => handleActive(a, i)}
        >
          <span>{a.icon}</span>
          <p>{a.title}</p>
        </li>
      ))}
    </>
  );
}

export default List;
