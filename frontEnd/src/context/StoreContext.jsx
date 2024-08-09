/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  // url of backend
  const url = "https://book-store-backend-byet.onrender.com";

  // check if user is login
  const [isLogin, setIsLogin] = useState(false);

  // name of user
  const [userName, setUserName] = useState("");

  // token of user
  const [userToken, setUserToken] = useState("");
  // categories
  const [category, setCategory] = useState("All");

  // choose book
  const [chooseBook, setChooseBook] = useState(null);

  // add to cart
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("bookCartItems")
      ? JSON.parse(localStorage.getItem("bookCartItems"))
      : []
  );

  // Update localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("bookCartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // still user login when he reload the website
  useEffect(() => {
    if (localStorage.getItem("user_token")) {
      setUserToken(localStorage.getItem("user_token"));
      setIsLogin(true);
    }
  }, []);

  const addToCart = (book) => {
    setCartItems((prevItems) => [...prevItems, book]);
  };

  // remove from cart
  const removeFromCart = (bookId) => {
    setCartItems((prev) => prev.filter((book) => book._id !== bookId));
  };

  const contextValue = {
    category,
    setCategory,
    chooseBook,
    setChooseBook,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    url,
    isLogin,
    setIsLogin,
    userName,
    setUserName,
    userToken,
    setUserToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
