import React from "react";
import "../../style/Menu/MenuCSS.scss";

import List from "./List";
import MenuData from "./MenuData";
import Footer from "../Footer";

function Menu() {
  const data = [...MenuData];

  return (
    <nav className="Menu">
      <ul>
        <List data={data} />
      </ul>
      <ul className="Footer">
        <Footer />
      </ul>
    </nav>
  );
}

export default Menu;
