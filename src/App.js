// import logo from './logo.svg';
// import "./App.css";
import React from "react";
// import "./component/style.css";
import "./bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar/Navbar.js";
import Header from "./component/Header/Header.js";
// /bootstrap/dist/css/bootstrap.min.css

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
