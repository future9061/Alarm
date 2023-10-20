import React from "react";
import "../../style/Menu/MenuCSS.scss";

import List from "./List";
import MenuData from "./MenuData";

function Menu() {
  const data = [...MenuData];

  return (
    <ul className="Menu">
      <List data={data} />
    </ul>
  );
}

export default Menu;
