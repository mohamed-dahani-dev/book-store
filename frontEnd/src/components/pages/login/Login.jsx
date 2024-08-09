import { useContext, useState } from "react";
import { StoreContext } from "../../../context/StoreContext";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // validation register with YUP
  const validationSchemaRegister = Yup.object({
    firstName: Yup.string()
      .trim()
      .min(3, "length must be at least 5 characters long")
      .max(100, "length must be at most 100 characters long")
      .required("The first name is required"),
    lastName: Yup.string()
      .trim()
      .min(3, "length must be at least 5 characters long")
      .max(100, "length must be at most 100 characters long")
      .required("The last name is required"),
    birthday: Yup.date().required("The birthday is required"),
    gender: Yup.string().trim().required("The gender is required"),
    email: Yup.string()
      .email("Invalid email")
      .trim()
      .min(5, "length must be at least 5 characters long")
      .max(255, "length must be at most 255 characters long")
      .required("The email is required"),
    password: Yup.string()
      .trim()
      .min(8, "length must be at least 5 characters long")
      .required("The password is required"),
  });

  // validation login with YUP
  const validationSchemaLogin = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .trim()
      .min(5, "length must be at least 5 characters long")
      .max(255, "length must be at most 255 characters long")
      .required("The email is required"),
    password: Yup.string()
      .trim()
      .min(8, "length must be at least 5 characters long")
      .required("The password is required"),
  });

  // toggling between login and Register
  const [currentState, setCurrentState] = useState("Login");

  const { url, setIsLogin, setUserName, setUserToken } =
    useContext(StoreContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      currentState === "Login"
        ? validationSchemaLogin
        : validationSchemaRegister
    ),
  });

  const navigate = useNavigate();

  // login or register
  const formSubmit = async (data) => {
    try {
      if (currentState === "Login") {
        const response = await axios.post(`${url}/user/login`, data);
        if (response.data.success) {
          toast.success(response.data.message);
          reset();
          setIsLogin(true);
          setUserName(response.data.userName);
          setUserToken(localStorage.setItem("user_token", response.data.token));
          navigate("/");
        } else {
          toast.error(response.data.error);
        }
      } else if (currentState === "Register") {
        const response = await axios.post(`${url}/user/register`, data);
        if (response.data.success) {
          toast.success(response.data.message);
          reset();
          setIsLogin(true);
          setUserName(response.data.userName);
          navigate("/");
        } else {
          toast.error(response.data.error);
        }
      } else {
        const response = await axios.post(`${url}/user/forgot-password`, data);
        if (response.data.success) {
          toast.success(response.data.message);
          reset();
        } else {
          toast.error(response.data.error);
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="text-text_color border-[1px] border-border_nav rounded-lg mt-10 py-5 px-4 flex flex-col gap-8 shadow-2xl w-[70%] m-auto max-sm:w-[90%]"
    >
      <h1 className="font-bold text-3xl text-rose-600 mb-5">{currentState}</h1>
      {currentState === "Register" && (
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName">First Name:</label>
            <input
              className="text-black border border-black w-full px-2 py-3 rounded-md outline-none"
              type="text"
              placeholder="First Name"
              id="firstName"
              name="firstName"
              {...register("firstName")}
            />
            <p className="mt-1 text-red-600 text-sm">
              {errors.firstName?.message}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName">Last Name:</label>
            <input
              className="text-black border border-black w-full px-2 py-3 rounded-md outline-none"
              type="text"
              placeholder="Last Name"
              id="lastName"
              name="lastName"
              {...register("lastName")}
            />
            <p className="mt-1 text-red-600 text-sm">
              {errors.lastName?.message}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="birthday">Your Birthday:</label>
            <input
              className="text-black border border-black w-full px-2 py-3 rounded-md outline-none"
              type="date"
              placeholder="Your Birthday"
              id="birthday"
              name="birthday"
              {...register("birthday")}
            />
            <p className="mt-1 text-red-600 text-sm">
              {errors.birthday?.message}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="gender">Gender:</label>
            <select
              name="gender"
              id="gender"
              className="text-black border border-black w-full px-2 py-3 rounded-md"
              {...register("gender")}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <p className="mt-1 text-red-600 text-sm">
              {errors.gender?.message}
            </p>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email:</label>
        <input
          className="text-black border border-black w-full px-2 py-3 rounded-md outline-none"
          type="text"
          placeholder="Email"
          id="email"
          name="email"
          {...register("email")}
        />
        <p className="mt-1 text-red-600 text-sm">{errors.email?.message}</p>
      </div>
      {currentState === "Forgot Password" ? (
        <></>
      ) : (
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Enter Password:</label>
          <input
            className="text-black border border-black w-full px-2 py-3 rounded-md outline-none"
            type="password"
            placeholder="Enter Password"
            id="password"
            name="password"
            {...register("password")}
          />
          <p className="mt-1 text-red-600 text-sm">
            {errors.password?.message}
          </p>
        </div>
      )}
      <button
        type="submit"
        className="border-[1.5px] rounded-md border-rose-600 py-2 px-8 self-center transition-all hover:bg-rose-600 hover:text-white"
      >
        {currentState}
      </button>
      {currentState === "Forgot Password" ? (
        <></>
      ) : (
        <div className="flex gap-2">
          <input type="checkbox" required />
          <p>Bye, Continuig i agree to the terms of use & privacy policy.</p>
        </div>
      )}
      {currentState === "Login" ? (
        <>
          <p className="text-center">
            Create a new account{" "}
            <span
              className="text-rose-600 underline cursor-pointer"
              onClick={() => {
                setCurrentState("Register");
              }}
            >
              Click Here!
            </span>
          </p>{" "}
          <p
            className="text-center underline text-rose-600 cursor-pointer"
            onClick={() => {
              setCurrentState("Forgot Password");
            }}
          >
            Forgot Password?
          </p>
        </>
      ) : (
        <p className="text-center">
          Already have an account?{" "}
          <span
            className="text-rose-600 underline cursor-pointer"
            onClick={() => {
              setCurrentState("Login");
            }}
          >
            Login Here!
          </span>
        </p>
      )}
    </form>
  );
};

export default Login;
