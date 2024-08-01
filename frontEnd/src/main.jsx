import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

//import contextStore
import StoreContextProvider from "./context/StoreContext";

// toast library
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreContextProvider>
      <BrowserRouter>
        <ToastContainer />
        <App />
      </BrowserRouter>
    </StoreContextProvider>
  </React.StrictMode>
);
