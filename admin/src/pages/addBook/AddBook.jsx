/* eslint-disable react/prop-types */
import { useState } from "react";
import uploadImge from "../../assets/upload img.png";
import Categories from "../../assets/categories/Categories";

import axios from "axios";
import { toast } from "react-toastify";
import * as Yub from "yup";

const AddBook = ({ url }) => {
  // logic of image
  const [image, setImage] = useState(false);

  // data
  const [data, setData] = useState({
    title: "",
    description: "",
    author: "",
    ISBN: "",
    pages: "",
    rate: "",
    price: "",
    category: "ROMANCE",
  });

  // error validation
  const [errorValidation, setErrorValidation] = useState("");

  // error validation style
  const errorValidationStyle = "mb-1 text-red-600 text-sm";

  // validation
  const validationSchema = Yub.object({
    image: Yub.string().trim().required("The image is required"),
    title: Yub.string()
      .trim()
      .min(1, "length must be at least 1 characters long")
      .max(255, "length must be at most 255 characters long")
      .required("The title is required"),
    description: Yub.string()
      .trim()
      .min(10, "length must be at least 10 characters long")
      .required("The description is required"),
    author: Yub.string()
      .trim()
      .min(1, "length must be at least 1 characters long")
      .max(255, "length must be at most 255 characters long")
      .required("The author is required"),
    ISBN: Yub.string()
      .trim()
      .min(3, "length must be at least 3 characters long")
      .max(13, "length must be at most 13 characters long")
      .required("The ISBN is required"),
    pages: Yub.number()
      .min(1, "must be greater than or equal to 1")
      .required("The pages is required"),
    rate: Yub.number()
      .min(0, "must be greater than or equal to 0")
      .max(5, "must be less than or equal to 5")
      .required("The rate is required"),
    price: Yub.number()
      .min(0, "must be greater than or equal to 0")
      .max(9999, "must be less than or equal to 9999")
      .required("The price is required"),
    category: Yub.string()
      .trim()
      .min(3, "length must be at least 3 characters long")
      .max(100, "length must be at most 100 characters long")
      .required("The category is required"),
  });

  // fill the data
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  // send data to database
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // validation of inputs
    try {
      await validationSchema.validate(data, { abortEarly: false });
    } catch (error) {
      const newError = {};
      error.inner.forEach((err) => {
        newError[err.path] = err.message;
        setErrorValidation(newError);
      });
    }

    // get data from the form
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("author", data.author);
    formData.append("ISBN", data.ISBN);
    formData.append("pages", Number(data.pages));
    formData.append("rate", Number(data.rate));
    formData.append("price", Number(data.price));
    formData.append("category", data.category);

    try {
      // use axios to send data to database
      const response = await axios.post(`${url}/add`, formData);
      // logic of adding
      if (response.data.success) {
        // empty the inputs
        setData({
          title: "",
          description: "",
          author: "",
          ISBN: "",
          pages: "",
          rate: "",
          price: "",
          category: "ROMANCE",
        });
        setImage(false);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      toast.error("An error occurred while adding the book.", error);
    }
  };

  return (
    <section>
      <form onSubmit={onSubmitHandler} className="text-text_color">
        <h1 className="text-2xl font-semibold text-rose-600">Add a book</h1>
        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <p>Upload Image :</p>
            <label htmlFor="image">
              <img
                src={image ? URL.createObjectURL(image) : uploadImge}
                className="w-20 cursor-pointer"
                alt=""
              />
            </label>
            <input
              className="p-2 rounded-md outline-none border"
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              hidden
              id="image"
            />
            {!image ? (
              <p className={errorValidationStyle}>{errorValidation.image}</p>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Title:</label>
            <input
              className="p-2 rounded-md outline-none border"
              type="text"
              id="title"
              name="title"
              placeholder="Enter title"
              onChange={onChangeHandler}
              value={data.title}
            />
            <p className={errorValidationStyle}>{errorValidation.title}</p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description">Description:</label>
            <textarea
              className="p-2 rounded-md outline-none border"
              id="description"
              name="description"
              placeholder="Enter description"
              onChange={onChangeHandler}
              value={data.description}
              rows={5}
            ></textarea>
            <p className={errorValidationStyle}>
              {errorValidation.description}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="author">Author:</label>
            <input
              className="p-2 rounded-md outline-none border"
              type="text"
              id="author"
              name="author"
              placeholder="Enter author"
              onChange={onChangeHandler}
              value={data.author}
            />
            <p className={errorValidationStyle}>{errorValidation.author}</p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="ISBN">ISBN:</label>
            <input
              className="p-2 rounded-md outline-none border"
              type="text"
              id="ISBN"
              name="ISBN"
              placeholder="Enter ISBN"
              onChange={onChangeHandler}
              value={data.ISBN}
            />
            <p className={errorValidationStyle}>{errorValidation.ISBN}</p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pages">Pages:</label>
            <input
              className="p-2 rounded-md outline-none border"
              type="number"
              id="pages"
              name="pages"
              placeholder="Enter pages"
              onChange={onChangeHandler}
              value={data.pages}
            />
            <p className={errorValidationStyle}>{errorValidation.pages}</p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="rate">Rate:</label>
            <input
              className="p-2 rounded-md outline-none border"
              type="number"
               step="0.01"
              id="rate"
              name="rate"
              placeholder="Enter rate"
              onChange={onChangeHandler}
              value={data.rate}
            />
            <p className={errorValidationStyle}>{errorValidation.rate}</p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="price">Price:</label>
            <input
              className="p-2 rounded-md outline-none border"
              type="number"
               step="0.01"
              id="price"
              name="price"
              placeholder="Enter price"
              onChange={onChangeHandler}
              value={data.price}
            />
            <p className={errorValidationStyle}>{errorValidation.price}</p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="category">category:</label>
            <select
              name="category"
              id="category"
              className="p-2 rounded-md outline-none border text-black"
              onChange={onChangeHandler}
              value={data.category}
            >
              {Categories.map((item, index) => {
                return (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            <p className={errorValidationStyle}>{errorValidation.category}</p>
          </div>
        </div>
        <button
          type="submit"
          className="bg-rose-600 text-white px-10 py-2 rounded-md mt-5 transition-all hover:bg-rose-500"
        >
          Add
        </button>
      </form>
    </section>
  );
};

export default AddBook;
