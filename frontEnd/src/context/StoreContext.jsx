/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  // categories
  const [category, setCategory] = useState("All");

  // choose book
  const [chooseBook, setChooseBook] = useState(null);

  // add to cart
  const [cartItems, setCartItems] = useState([]);

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
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
