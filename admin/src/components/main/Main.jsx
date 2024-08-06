import { Route, Routes } from "react-router-dom";
import LeftSide from "../leftSide/LeftSide";
import AddBook from "../../pages/addBook/AddBook";
import Book from "../../pages/book/Book";
import { useState } from "react";

const Main = () => {
  const url = "http://localhost:3000";

  // switch between add book and update book
  const [updateBook, setUpdateBook] = useState(false);
  console.log(updateBook);

  // transfer data from book to add book
  const [itemUpdate, setItemUpdate] = useState({});
  console.log(itemUpdate);

  return (
    <main className=" mt-10 flex gap-20">
      <LeftSide updateBook={updateBook} />
      <section className="w-full">
        <Routes>
          <Route
            path="/add"
            element={
              <AddBook
                url={url}
                updateBook={updateBook}
                setUpdateBook={setUpdateBook}
                itemUpdate={itemUpdate}
              />
            }
          />
          <Route
            path="/book"
            element={
              <Book
                url={url}
                setUpdateBook={setUpdateBook}
                setItemUpdate={setItemUpdate}
              />
            }
          />
        </Routes>
      </section>
    </main>
  );
};

export default Main;
