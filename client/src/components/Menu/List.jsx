import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function List({ data }) {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const handleActive = (elem, idx) => {
    setActive(idx);
    navigate(`${elem.path}`);
  };

  useEffect(() => {
    data.map((a, i) => {
      if (location.pathname === a.path) {
        setActive(i);
      }
    });
  }, [location]);

  return (
    <>
      {data.map((a, i) => (
        <li
          className={active === i ? "active" : undefined}
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
