// import logo from './logo.svg';
// import "./App.css";
import React from "react";
// import "./component/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar.js";
import Header from "./component/Header.js";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Header />
      </div>
    </>
  );
}

export default App;
