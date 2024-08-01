import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faMoon,
  faSun,
  faBook,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";

const Header = () => {
  // State for theme
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "light");
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [theme]);

  // State for search query
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // To programmatically navigate

  // Context for cart
  const { cartItems, setCategory } = useContext(StoreContext);

  // Handle search
  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Navigate to search results page with the search query
      navigate(`/book?query=${encodeURIComponent(searchQuery.trim())}`);
      setCategory("All")
    }
  };

  return (
    <div className="bg-rose-600 text-white p-4 flex flex-col gap-5">
      <header className="flex items-center justify-between gap-5">
        <Link
          to="/"
          className="text-3xl font-bold flex gap-2 items-center max-sm:text-xl"
        >
          Book Store
          <FontAwesomeIcon icon={faBook} />
        </Link>
        <div className="flex items-center max-sm:hidden">
          <input
            type="text"
            placeholder="Search by title"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 text-black outline-none rounded-l-md"
          />
          <button
            className="bg-rose-400 py-2 px-4 rounded-r-md transition-all hover:bg-rose-300"
            onClick={handleSearch}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        <div className="flex items-center gap-5">
          <Link to="/cart" className="relative">
            <FontAwesomeIcon className="text-lg" icon={faCartShopping} />
            {cartItems.length === 0 ? (
              <></>
            ) : (
              <span className="absolute -left-2 -top-2 h-5 w-5 bg-teal-600 rounded-full font-bold flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
          <Link
            to="/login"
            className="border-[1.5px] py-1 px-5 rounded-md transition-all hover:bg-white hover:text-rose-600"
          >
            Login
          </Link>
          <button
            className="border-[1.5px] rounded-full h-9 w-9 flex items-center justify-center"
            onClick={() => {
              // Toggle theme
              const newTheme = theme === "dark" ? "light" : "dark";
              localStorage.setItem("currentMode", newTheme);
              setTheme(newTheme);
            }}
          >
            {theme === "light" ? (
              <FontAwesomeIcon icon={faMoon} />
            ) : (
              <FontAwesomeIcon className="text-yellow-400" icon={faSun} />
            )}
          </button>
        </div>
      </header>
      <div className="hidden max-sm:flex items-center justify-center">
        <input
          type="text"
          placeholder="Search by title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 text-black outline-none rounded-l-md"
        />
        <button
          className="bg-rose-400 py-2 px-4 rounded-r-md transition-all hover:bg-rose-300"
          onClick={handleSearch}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </div>
  );
};

export default Header;
