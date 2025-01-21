
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header";
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/master" element={<APP />} />
          {/* <Route path="/" element={<Home />} />
          <Route path="/add_user" element={<AddUser />} />
          <Route path="/manage_user" element={<ManageUser />} /> */}
        </Routes>
       
      </BrowserRouter>
    </>
  );
}

export default App;
