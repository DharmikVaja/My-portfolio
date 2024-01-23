import React from "react";
import bgImage from "../component/bgimg.jpg";
// import App from "../App";
import "./style.css";
// import bgImg from "./bgimage.jpeg";

function Header() {
  return (
    <div>
      <img className="ImageClass" src={bgImage} />
    </div>
  );
}

export default Header;
