import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//import React from "react";
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/header/Header";


// mine add

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
       <Header>
        
       </Header>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
