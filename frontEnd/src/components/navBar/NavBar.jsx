import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavBar = () => {
  // show burger menu
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="border-b-2 border-rose-300 text-text_color py-5 flex items-center justify-center max-sm:justify-between">
      <div />
      <nav className="flex items-center gap-14 sticky top-0 max-sm:hidden">
        <NavLink
          to="/"
          className="py-2 px-4 rounded-md transition-all font-semibold"
        >
          Home
        </NavLink>
        <NavLink
          to="/book"
          className="py-2 px-4 rounded-md transition-all font-semibold"
        >
          Books
        </NavLink>
        <NavLink
          to="/about"
          className="py-2 px-4 rounded-md transition-all font-semibold"
        >
          About
        </NavLink>
      </nav>
      <FontAwesomeIcon
        onClick={() => {
          setShowMenu(true);
        }}
        className="hidden text-3xl cursor-pointer max-sm:block"
        icon={faBars}
      />
      {showMenu && (
        <div className="fixed bg-[#00000076] inset-0 z-50">
          <nav className="absolute right-0 w-2/3 h-full transition-all bg-bg_header p-5 flex flex-col gap-4">
            <FontAwesomeIcon
              className="self-end cursor-pointer mb-5"
              onClick={() => {
                setShowMenu(false);
              }}
              size="2x"
              icon={faXmark}
            />
            <NavLink
              onClick={() => {
                setShowMenu(false);
              }}
              to="/"
              className="py-2 px-4 rounded-md transition-all font-semibold"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => {
                setShowMenu(false);
              }}
              to="/books"
              className="py-2 px-4 rounded-md transition-all font-semibold"
            >
              Books
            </NavLink>
           
            <NavLink
              onClick={() => {
                setShowMenu(false);
              }}
              to="/about"
              className="py-2 px-4 rounded-md transition-all font-semibold"
            >
              About
            </NavLink>
          </nav>
        </div>
      )}
    </div>
  );
};

export default NavBar;
