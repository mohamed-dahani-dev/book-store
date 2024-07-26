import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Login from "./components/pages/login/Login";
import Home from "./components/pages/home/Home";

const App = () => {
  return (
    <>
      <Header />
      <div className="pb-2 px-4">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
