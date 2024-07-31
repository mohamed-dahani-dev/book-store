import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { useContext } from "react";
import { StoreContext } from "../../../context/StoreContext";

const BookInfo = () => {
  // data of choose book
  const { chooseBook, addToCart } = useContext(StoreContext);
  return (
    <section className="mt-10 text-text_color flex gap-10 max-sm:flex-col">
      <div className="text-sm max-sm:flex flex-col items-center">
        <img
          src={chooseBook.image}
          alt=""
          className="w-48 shadow-2xl rounded-md"
        />
        <div className="mt-5 flex flex-col gap-2">
          <p className="font-light">
            Pages: <span className="font-semibold">{chooseBook.pages}</span>
          </p>
          <p className="font-light">
            ISBN: <span className="font-semibold">{chooseBook.ISBN}</span>
          </p>
        </div>
      </div>
      <div className=" flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">{chooseBook.title}</h1>
          <p className="text-sm">
            By <span className="text-teal-500">{chooseBook.author}</span>
          </p>
          <h4 className=" font-bold">
            {chooseBook.rate}{" "}
            <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
          </h4>
          <p>
            Price:{" "}
            <span className="font-bold text-rose-600">${chooseBook.price}</span>
          </p>
        </div>
        <button className="bg-teal-500 text-white px-5 py-2 rounded-md transition-all hover:bg-teal-400" onClick={() => { addToCart(chooseBook) }}>
          Add To Cart
        </button>
      </div>
      <div className="w-1/2 max-sm:w-full">
        <h3 className="mb-5 font-semibold">Description:</h3>
        <p>{chooseBook.description}</p>
      </div>
    </section>
  );
};

export default BookInfo;
