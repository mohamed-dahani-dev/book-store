import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { StoreContext } from "../../../context/StoreContext";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  // data of books cart
  const { cartItems, removeFromCart, url } = useContext(StoreContext);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  // Procced to payment
  const navigate = useNavigate();
  const proccedToPayment = () => {
    // check if the cart item is empty
    if (cartItems.length === 0) {
      toast.error("Please add book to cart first!");
    } else if (!localStorage.getItem("token")) {
      toast.error("You have Login in First");
    } else {
      navigate("/payment");
    }
  };

  return (
    <div className="mt-10">
      <div className="flex items-center gap-5">
        <h1 className="text-text_color text-3xl font-bold">Cart</h1>
        <FontAwesomeIcon
          className="text-rose-600 text-3xl"
          icon={faCartShopping}
        />
      </div>
      <div className="text-text_color mt-20 font-bold grid grid-cols-4 gap-10 items-center text-center">
        <p>Book</p>
        <p>Title</p>
        <p>Price</p>
        <p>Remove</p>
      </div>
      {cartItems.map((item, index) => (
        <div
          key={index}
          className="text-text_color grid grid-cols-4 gap-10 items-center text-center py-5"
        >
          <img
            src={`${url}/images/${item.image}`}
            className="w-16 object-cover mx-auto rounded-md"
            alt={item.title}
          />
          <p className="text-text_color">{item.title}</p>
          <p className="text-rose-600 font-semibold">${item.price}</p>
          <button
            onClick={() => {
              removeFromCart(item._id);
              toast.error("Removed book successfully");
            }}
          >
            <FontAwesomeIcon className="text-rose-600" icon={faTrash} />
          </button>
        </div>
      ))}
      <hr className="my-10 border-rose-300 border" />
      <div>
        <div className="text-text_color font-bold text-1xl flex justify-center gap-10">
          <h1>Total:</h1>
          <h1 className="text-rose-600">${totalPrice}</h1>
        </div>
        <button
          className="bg-rose-600 px-8 py-3 rounded-md block my-10 mx-auto transition-all hover:bg-rose-500"
          onClick={proccedToPayment}
        >
          PROCEED TO PAYMENT
        </button>
      </div>
    </div>
  );
};

export default Cart;
