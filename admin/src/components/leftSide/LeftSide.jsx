/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faList, faPen } from "@fortawesome/free-solid-svg-icons";

const LeftSide = ({ updateBook }) => {
  return (
    <section className="bg-teal-500 px-3 py-5 -mx-10 rounded-r-md h-[100vh] min-w-40">
      <nav className="flex flex-col gap-2">
        <NavLink
          to="/add"
          className="px-3 py-2 rounded-lg flex items-center gap-3 font-medium"
        >
          {!updateBook ? (
            <>
              <FontAwesomeIcon className="text-1xl" icon={faPlus} />
              {"Add Book"}
            </>
          ) : (
            <>
              <FontAwesomeIcon className="text-1xl" icon={faPen} />
              {"Update Book"}
            </>
          )}
        </NavLink>
        <NavLink
          to="/book"
          className="px-3 py-2 rounded-lg flex items-center gap-3 font-medium"
        >
          <FontAwesomeIcon className="text-1xl" icon={faList} />
          All Books
        </NavLink>
      </nav>
    </section>
  );
};

export default LeftSide;
