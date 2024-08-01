/* eslint-disable react-hooks/exhaustive-deps */
import categoriesList from "../../../assets/categories/Categories";
import Book from "../../../assets/book/Book";
import { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../../context/StoreContext";
import { Link, useLocation } from "react-router-dom";

const BookList = () => {
  const [bookFilter, setBookFilter] = useState(Book);
  const { category, setCategory, setChooseBook } = useContext(StoreContext);
  const location = useLocation();

  const filterBooks = (books, categoryFilter, searchQuery) => {
    return books
      .filter((book) =>
        categoryFilter === "All" ? true : book.category === categoryFilter
      )
      .filter((book) =>
        searchQuery ? book.title.toLowerCase().includes(searchQuery.toLowerCase()) : true
      );
  };

  const handleClick = (bookCategory) => {
    setCategory(bookCategory);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get("category");
    const queryParam = searchParams.get("query");

    if (categoryParam) {
      setCategory(categoryParam);
    }

    const filteredBooks = filterBooks(Book, categoryParam || category, queryParam);
    setBookFilter(filteredBooks);
  }, [location.search, category]);

  return (
    <section className="mt-10">
      <div className="flex items-center gap-5 max-sm:flex-col">
        <h3 className="text-text_color">Select Category:</h3>
        <select
          name=""
          id=""
          className="text-black text-center p-[2px] outline-none rounded-md border-2"
          value={category}
          onChange={(e) => handleClick(e.target.value)}
        >
          <option value="All">All</option>
          {categoriesList.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-10 flex justify-center flex-wrap gap-8">
        {bookFilter.map((item, index) => (
          <Link
            to="/bookinformation"
            key={index}
            className="cursor-pointer text-wrap"
            onClick={() => {
              setChooseBook(item);
            }}
          >
            <img src={item.image} alt="" className="rounded-md shadow-2xl" />
            <h3 className="text-text_color text-lg max-w-52">{item.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BookList;
