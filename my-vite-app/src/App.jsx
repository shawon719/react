import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/header/Header";

//import './App.css'



function App() {
  
  return (
    <>
     
        <BrowserRouter>
        <Header></Header>
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
        </BrowserRouter>
      
    </>
  );
}

export default App;
