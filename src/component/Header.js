import React from "react";
import bgImage from "./bgimg1.jpg";
// import App from "../App";
// import "./style.css";
import "./header.css";
// import bgImg from "./bgimg1.jpg";

function Header() {
  return (
    <div className="HeaderClass">
      <image src={bgImage} alt="bg image" className="img-fluid" />
    </div>
  );
}

export default Header;
