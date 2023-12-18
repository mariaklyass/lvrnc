import React from "react";
import "../../../css/style.css";

import Logo from "../Logo/Logo";
import { MENU } from "../../utils/constants";
import ScrollAnimation from "react-animate-on-scroll";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header id="navbar" className="header">
    <Logo />
    <nav className="menu">
      {MENU.map(({ link, name }, i) => (
        // <ScrollAnimation
        //   key={link}
        //   // className="menu-item"
        //   animateIn="fadeInDown"
        //   delay={i * 100}
        //   offset={0}
        // >
        <NavLink
          className={({ isActive }) =>
            !link.startsWith("#") && isActive ? "active" : ""
          }
          to={`/${link}`}
        >
          {name}
        </NavLink>
        // </ScrollAnimation>
      ))}
    </nav>
  </header>
);

export default Header;
