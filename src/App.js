import "./App.css";
//Pages
import Home from "./pages/home";
import Login from "./pages/login"
//Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home /> }/>
    <Route path="/Login" element={<Login /> }/>
   </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
