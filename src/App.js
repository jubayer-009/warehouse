import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from "./Components/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/LogIn";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/Signup";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
