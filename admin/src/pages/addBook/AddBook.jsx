/* eslint-disable react/prop-types */
import Categories from "../../assets/categories/Categories";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import * as Yub from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const AddBook = ({ url, updateBook, setUpdateBook, itemUpdate }) => {
  // validation with YUP
  const validationSchema = Yub.object({
    // image: Yub.string().trim().required("The image is required"),
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

  // reactUseFormHook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    // add validationSchema to resolver
    resolver: yupResolver(validationSchema),
  });
  // send data to database
  const submitForm = async (data) => {
    // Create a FormData object
    const formData = new FormData();

    // Append all form fields to the FormData object
    for (const key in data) {
      if (key === "image") {
        formData.append("image", data.image[0]); // Append the image file
      } else {
        formData.append(key, data[key]);
      }
    }

    try {
      const response = updateBook
        ? await axios.put(`${url}/update/${itemUpdate._id}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        : await axios.post(`${url}/add`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
      if (response.data.success) {
        toast.success(response.data.message);
        reset();
        setUpdateBook(false);
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit(submitForm)} className="text-text_color">
        <h1 className="text-2xl font-semibold text-rose-600 mb-10">
          {!updateBook ? "Add a Book" : "Update Book"}
        </h1>
        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="image">Upload Image:</label>
            <input
              className="text-sm  rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-700 p-2"
              type="file"
              id="image"
              {...register("image")}
            />
            <p className="mb-1 text-red-600 text-sm">{errors.image?.message}</p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Title:</label>
            <input
              className="p-2 rounded-md outline-none border text-black"
              type="text"
              id="title"
              placeholder="Enter title"
              {...register("title")}
              defaultValue={itemUpdate.title}
            />
            <p className="mb-1 text-red-600 text-sm">{errors.title?.message}</p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description">Description:</label>
            <textarea
              className="p-2 rounded-md outline-none border text-black"
              id="description"
              placeholder="Enter description"
              rows={5}
              {...register("description")}
              defaultValue={itemUpdate.description}
            ></textarea>
            <p className="mb-1 text-red-600 text-sm">
              {errors.description?.message}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="author">Author:</label>
            <input
              className="p-2 rounded-md outline-none border text-black"
              type="text"
              name="author"
              placeholder="Enter author"
              {...register("author")}
              defaultValue={itemUpdate.author}
            />
            <p className="mb-1 text-red-600 text-sm">
              {errors.author?.message}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="ISBN">ISBN:</label>
            <input
              className="p-2 rounded-md outline-none border text-black"
              type="text"
              id="ISBN"
              placeholder="Enter ISBN"
              {...register("ISBN")}
              defaultValue={itemUpdate.ISBN}
            />
            <p className="mb-1 text-red-600 text-sm">{errors.ISBN?.message}</p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pages">Pages:</label>
            <input
              className="p-2 rounded-md outline-none border text-black"
              type="number"
              id="pages"
              placeholder="Enter pages"
              {...register("pages")}
              defaultValue={itemUpdate.pages}
            />
            <p className="mb-1 text-red-600 text-sm">{errors.pages?.message}</p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="rate">Rate:</label>
            <input
              className="p-2 rounded-md outline-none border text-black"
              type="number"
              step="0.01"
              id="rate"
              placeholder="Enter rate"
              {...register("rate")}
              defaultValue={itemUpdate.rate}
            />
            <p className="mb-1 text-red-600 text-sm">{errors.rate?.message}</p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="price">Price:</label>
            <input
              className="p-2 rounded-md outline-none border text-black"
              type="number"
              step="0.01"
              id="price"
              placeholder="Enter price"
              {...register("price")}
              defaultValue={itemUpdate.price}
            />
            <p className="mb-1 text-red-600 text-sm">{errors.price?.message}</p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              className="p-2 rounded-md outline-none border text-black"
              {...register("category")}
              defaultValue={itemUpdate.category}
            >
              {Categories.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
            <p className="mb-1 text-red-600 text-sm">
              {errors.category?.message}
            </p>
          </div>
        </div>
        <button
          type="submit"
          className={`${
            !updateBook ? "bg-rose-600" : "bg-blue-600"
          } text-white px-10 py-2 rounded-md mt-5 transition-all hover:bg-opacity-80`}
        >
          {!updateBook ? "Add" : "Update"} Book
        </button>
      </form>
    </section>
  );
};

export default AddBook;
