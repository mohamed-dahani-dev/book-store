import categoriesList from "../../../assets/categories/Categories";
import Book from "../../../assets/book/Book";

const BookList = () => {
  return (
    <section className="mt-10">
      <div className="flex items-center gap-5 max-sm:flex-col">
        <h3 className="text-text_color">Select Category:</h3>
        <select
          name=""
          id=""
          className="text-black text-center p-[2px] outline-none rounded-md border-2"
        >
          <option value="all">All</option>
          {categoriesList.map((item, index) => {
            return (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="mt-10 flex justify-center flex-wrap gap-8">
        {Book.map((item, index) => { 
            return(
                <div key={index} className="cursor-pointer">
                    <img src={item.image} alt="" className="rounded-md shadow-2xl" />
                    <h3 className="text-text_color text-lg">{item.title}</h3>
                </div>
            )
         })}
      </div>
    </section>
  );
};

export default BookList;
