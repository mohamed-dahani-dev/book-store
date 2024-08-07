/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as Yub from "yup";

const Login = ({ setIsLogin, url, setAdminName }) => {
  // validation with YUP
  const validationSchema = Yub.object({
    email: Yub.string()
      .email("Invalid email")
      .trim()
      .min(5, "length must be at least 5 characters long")
      .max(255, "length must be at most 255 characters long")
      .required("The email is required"),
    password: Yub.string()
      .trim()
      .min(8, "length must be at least 5 characters long")
      .required("The password is required"),
  });

  // react use form hook
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
    try {
      const response = await axios.post(`${url}/admin/login`, data);
      if (response.data.success) {
        reset();
        toast.success(response.data.message);
        setAdminName(response.data.name);
        setIsLogin(true);
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <section className="bg-gray-900 min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
              Admin Login
            </h1>
            <form
              onSubmit={handleSubmit(submitForm)}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="b border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="example@email.com"
                  {...register("email")}
                />
                <p className="mt-1 text-red-600 text-sm">
                  {errors.email?.message}
                </p>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  className="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 outline-none"
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  {...register("password")}
                />
                <p className="mt-1 text-red-600 text-sm">
                  {errors.password?.message}
                </p>
              </div>
              <button
                type="submit"
                className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
