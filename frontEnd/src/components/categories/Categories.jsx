import CategoriesList from "../../assets/categories/Categories";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <article id="categories" className="mt-20">
      <h1 className="text-text_color font-bold text-2xl underline mb-10 flex items-center gap-5 max-sm:text-lg">
        Categories
        <FontAwesomeIcon className="text-rose-600" icon={faBookmark} />
      </h1>
      <div className="grid grid-cols-4 gap-5 max-md:grid-cols-3 max-sm:grid-cols-2">
        {CategoriesList.map((item, index) => {
          return (
            <Link
              to={`book?Category=${item.name}`}
              key={index}
              className="relative cursor-pointer"
            >
              <img src={item.picture} alt="" className="rounded-md" />
              <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00000065] w-full text-center text-lg py-5 max-md:text-base max-sm:text-xs">
                {item.name}
              </h3>
            </Link>
          );
        })}
      </div>
    </article>
  );
};

export default Categories;
