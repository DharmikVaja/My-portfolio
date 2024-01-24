import React from "react";
import Typed from "react-typed";
import "./header.css";

function Header() {
  return (
    <div className="HeaderClass">
      <div className="Text">
        <h1 className="MainText">Hello, I am Dharmik Vaja</h1>
        {/* <div className="Typed-text"> */}
        {/* <Typed
            strings={[
              "Frontend Developer",
              "Web Developer",
              "ReactJS Developer",
            ]}
            typeSpeed={60}
            backSpeed={80}
            loop
          /> */}
        <h3>I am a Web Developer & currently work as an Intern</h3>
        {/* </div> */}
        <a href="#" className="contactBtn">
          Contact Me
        </a>
      </div>
    </div>
  );
}

// export { Typed };
export default Header;
