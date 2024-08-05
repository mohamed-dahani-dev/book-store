import { Route, Routes } from "react-router-dom";
import LeftSide from "../leftSide/LeftSide";
import AddBook from "../../pages/addBook/AddBook";
import Book from "../../pages/book/Book";

const Main = () => {
  const url = "http://localhost:3000";
  return (
    <main className=" mt-10 flex gap-20">
      <LeftSide />
      <section className="w-full">
        <Routes>
          <Route path="/add" element={<AddBook url={url} />} />
          <Route path="/book" element={<Book url={url} />} />
        </Routes>
      </section>
    </main>
  );
};

export default Main;
