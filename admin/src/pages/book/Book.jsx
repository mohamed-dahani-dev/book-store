/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faStar } from "@fortawesome/free-solid-svg-icons";

const Book = ({ url }) => {
  // stock the books in useState
  const [list, setList] = useState([]);

  // get all books
  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/book`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        console.error("Failed to fetch books:", response.data.message);
      }
    } catch (error) {
      toast.error("Failed to fetch books");
      console.error("Error fetching books:", error);
    }
  };

  // run fetchList function when the page is render
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <section className="text-text_color">
      <div className="grid grid-cols-7 gap-5 items-center mb-10 font-semibold">
        <h3>Image</h3>
        <h3>Title</h3>
        <h3>Author</h3>
        <h3>Rate</h3>
        <h3>Price</h3>
        <h3>Category</h3>
        <h3>Action</h3>
      </div>
      {list.map((item, index) => {
        return (
          <div
            key={index}
            className="grid grid-cols-7 gap-5 items-center text-sm mb-5"
          >
            <img
              src={`${url}/images/${item.image}`}
              className="w-14 rounded-md"
              alt=""
            />
            <h2>{item.title}</h2>
            <p>{item.author}</p>
            <p>
              {item.rate}
              <FontAwesomeIcon className="text-yellow-500 ml-1" icon={faStar} />
            </p>
            <p>${item.price}</p>
            <p>{item.category}</p>
            <div className="flex gap-2">
              <button className="bg-blue-600 w-10 h-10 rounded-full flex justify-center items-center transition-all hover:bg-red-500">
                <FontAwesomeIcon className="text-white" icon={faPen} />
              </button>
              <button className="bg-red-600 w-10 h-10 rounded-full flex justify-center items-center transition-all hover:bg-red-500">
                <FontAwesomeIcon className="text-white" icon={faTrash} />
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Book;
