import React from "react";
// import style from "./style.css";
import App from "../../App";
import logo from "../../Resources/MyLogo.png";
import "./navbar.css";
// import Navbg from "../../Resources/navbg.jpeg";
import Navbg from "../../Resources/navbg.jpeg";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import '../../styles/bootstrap.min.css';

function Navbar() {
  return (
    <>
      <nav
        className=" navbar navbar-expand-lg  bg-secondary"
        style={{ backgroundColor: "white" }}
        backgroundImage={{ Navbg }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img className="LogoImage" src={logo} alt="Logo Image" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link " href="#">
                  Home <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
