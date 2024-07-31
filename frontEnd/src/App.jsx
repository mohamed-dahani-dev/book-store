import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Login from "./components/pages/login/Login";
import Home from "./components/pages/home/Home";
import Footer from "./components/footer/Footer";
import BookList from "./components/pages/bookList/BookList";
import About from "./components/pages/about/About";
import Cart from "./components/pages/cart/Cart";
import BookInfo from "./components/pages/bookInfo/BookInfo";

const App = () => {
  return (
    <>
      <Header />
      <div className="pb-2 px-4">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/book" element={<BookList />} />
          <Route path="/about" element={<About />} />
          <Route path="/bookinformation" element={<BookInfo />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
