import React from "react";
import "./Footer.css";
import design from "../../assets/design.svg";

const Footer = () => {
  return (
    <div className="foot">
      <img src={design} alt="design" className="desing" />
      <p className="after">mg_fırtına</p>
    </div>
  );
};

export default Footer;
