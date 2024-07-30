import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="mt-10 flex flex-col items-center gap-10">
      <div>
        <FontAwesomeIcon className="text-rose-600 text-9xl" icon={faBook} />
      </div>
      <p className="text-text_color text-center px-10 text-slate-600">
        Welcome to our bookstore, your ultimate destination for discovering and
        purchasing books both in-store and online. At our physical location, you
        can explore a curated selection of titles across various genres, from
        the latest bestsellers to timeless classics. Our friendly staff is
        always on hand to help you find your next great read. For added
        convenience, our website allows you to browse and buy books from the
        comfort of your home. With a user-friendly interface, detailed book
        descriptions, and secure checkout, shopping online with us is a seamless
        experience. Whether you prefer the tactile joy of flipping through pages
        in-store or the ease of online shopping, we’re dedicated to providing
        you with exceptional service and an extensive range of books to suit all
        your reading needs.
      </p>
      <h4 className="text-text_color">
        Created By <a href="https://mohameddahanidev.onrender.com/" target="_blank" className="underline text-rose-600">Mohamed Dahani</a>
      </h4>
    </div>
  );
};

export default About;
