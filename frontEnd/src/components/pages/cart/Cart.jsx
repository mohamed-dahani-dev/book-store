import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  return (
    <div className="mt-10">
      <div className="flex items-center gap-5">
        <h1 className="text-text_color text-3xl font-bold">Cart</h1>
        <FontAwesomeIcon className="text-rose-600 text-3xl" icon={faCartShopping} />
      </div>
      <div className="text-text_color mt-20 font-bold flex justify-around gap-10">
        <p>Book</p>
        <p>Title</p>
        <p>Price</p>
        <p>Remove</p>
      </div>
      <hr className="my-10 border-rose-300 border"  />
      <div>
        <div className=" text-text_color font-bold text-1xl flex justify-center gap-10">
            <h1>Total:</h1>
            <h1>$0</h1>
        </div>
        <button className="bg-rose-600 px-8 py-3 rounded-md block my-10 mx-auto transition-all hover:bg-rose-500">PROCEED TO PAYMENT</button>
      </div>
    </div>
  );
};

export default Cart;
