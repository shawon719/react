import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./components/home/Home";
// import Card from "./components/card/Card";
// import Contact from "./components/contact/Contact";
// import Footer from "./footer/Footer";

import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Sidebar></Sidebar>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/card" element={<Card />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </>
  );
}

export default App;
