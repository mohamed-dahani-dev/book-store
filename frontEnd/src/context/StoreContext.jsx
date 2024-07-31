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

  const contextValue = {
    category,
    setCategory,
    chooseBook,
    setChooseBook,
    cartItems,
    setCartItems,
    addToCart,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
