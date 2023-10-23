import React from "react";
import "../style/FooterCSS.scss";
import { BiCodeAlt, BiLogoGithub } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const URL = [
    {
      title: "code",
      link: "https://github.com/future9061/react-query-Alarm",
      icon: <BiCodeAlt />,
    },
    {
      title: "github",
      link: "https://github.com/future9061/",
      icon: <BiLogoGithub />,
    },
  ];

  return (
    <>
      {URL.map((a, i) => {
        return (
          <li key={i} onClick={() => window.open(`${a.link}`)}>
            {a.icon}
          </li>
        );
      })}
    </>
  );
}

export default Footer;
