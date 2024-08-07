/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faBook,
  faChevronDown,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Header = ({ setIsLogin, adminName }) => {
  // State for theme
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "light"
  );
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [theme]);
  return (
    <header className="flex justify-between items-center max-sm:flex-col gap-5">
      <div className="flex gap-2 items-center max-sm:gap-1">
        <Link
          to="/"
          className="text-2xl font-bold text-rose-600 max-sm:text-lg"
        >
          Admin Panel
        </Link>
        <FontAwesomeIcon className="text-2xl text-rose-600" icon={faBook} />
      </div>

      <div className=" flex items-center gap-10 max-sm:gap-32">
        <div className="relative flex flex-col items-center justify-center group">
          <h3 className="text-text_color font-semibold cursor-pointer max-sm:text-sm">
           {adminName}
          </h3>
          <FontAwesomeIcon
            className="text-text_color cursor-pointer"
            icon={faChevronDown}
          />
          <button
            className="hidden group-hover:flex items-center gap-4 bg-rose-600 px-10 py-2 rounded-md top-10 absolute cursor-pointer transition-all hover:bg-rose-500"
            onClick={() => {
              setIsLogin(false);
              toast.success("Logout was successful");
            }}
          >
            <FontAwesomeIcon
              className="text-white max-sm:text-sm"
              icon={faRightFromBracket}
            />
            <h3 className="text-white max-sm:text-sm">Logout</h3>
          </button>
        </div>
        <button
          className="border-[1.5px] border-text_color rounded-full h-9 w-9 flex items-center justify-center"
          onClick={() => {
            // Toggle theme
            const newTheme = theme === "dark" ? "light" : "dark";
            localStorage.setItem("currentMode", newTheme);
            setTheme(newTheme);
          }}
        >
          {theme === "light" ? (
            <FontAwesomeIcon className="text-text_color" icon={faMoon} />
          ) : (
            <FontAwesomeIcon className="text-yellow-400" icon={faSun} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
