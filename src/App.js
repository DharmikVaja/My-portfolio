// import logo from './logo.svg';
// import "./App.css";
import React from "react";
// import "./component/style.css";
import "./bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar/Navbar.js";
import Header from "./component/Header/Header.js";
import Footer from "./component/Footer/Footer.js";

// /bootstrap/dist/css/bootstrap.min.css

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Header />
        <Footer />
      </div>
    </>
  );
}

export default App;
