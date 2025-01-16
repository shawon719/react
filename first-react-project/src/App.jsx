// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Card from "./components/card/Card";

function App() {
  return (
    <>
      <BrowserRouter>
        {/*render the Navbar outside of routes so it appears on all pages*/}
        <Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card" element={<Card />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </>
  );
}

export default App;
