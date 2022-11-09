import React from "react";
import "../header/header.css";
import CTA from "../header/CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "../header/HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>hello i'm </h5>
        <h1>Bolo MichealS</h1>
        <h5 className="text-light">Fontend Developmer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
