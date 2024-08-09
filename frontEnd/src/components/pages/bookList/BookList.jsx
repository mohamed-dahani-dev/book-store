/* eslint-disable react-hooks/exhaustive-deps */
import categoriesList from "../../../assets/categories/Categories";
import { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../../context/StoreContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const BookList = () => {
  const [books, setBooks] = useState([]); // Store the full list of books
  const [bookFilter, setBookFilter] = useState([]); // Store the filtered list

  const { category, setCategory, setChooseBook, url } = useContext(StoreContext);
  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  // Fetch the book list from the database
  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/book`);
      if (response.data.success) {
        setBooks(response.data.data); // Set the full list of books
        setBookFilter(response.data.data); // Initially set the filtered list to the full list
      } else {
        console.error("Failed to fetch books:", response.data.error);
      }
    } catch (error) {
      toast.error("Failed to fetch books");
      console.error("Error fetching books:", error);
    }
  };

  const filterBooks = (books, categoryFilter, searchQuery) => {
    return books
      .filter((book) =>
        categoryFilter === "All" ? true : book.category === categoryFilter
      )
      .filter((book) =>
        searchQuery
          ? book.title.toLowerCase().includes(searchQuery.toLowerCase())
          : true
      );
  };

  const handleClick = (bookCategory) => {
    setCategory(bookCategory);
    navigate(`?category=${bookCategory}`); // Update the URL with the selected category
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get("category"); // Read 'category' from the URL
    const queryParam = searchParams.get("query");

    if (categoryParam) {
      setCategory(categoryParam);
    }

    const filteredBooks = filterBooks(
      books, // Use the full list of books for filtering
      categoryParam || category,
      queryParam
    );
    setBookFilter(filteredBooks); // Update the filtered list
  }, [location.search, books]); // Re-run when location.search or books change

  // Run fetchList function when the page is rendered
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <section className="mt-10">
      <div className="flex items-center gap-5 max-sm:flex-col">
        <h3 className="text-text_color">Select Category:</h3>
        <select
          name=""
          id=""
          className="text-black text-center p-[2px] outline-none rounded-md border-2"
          value={category} // Reflect the current category state
          onChange={(e) => handleClick(e.target.value)} // Call handleClick on change
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
            <img src={`${url}/images/${item.image}`} alt="" className="rounded-md shadow-2xl" />
            <h3 className="text-text_color text-lg max-w-52">{item.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BookList;
