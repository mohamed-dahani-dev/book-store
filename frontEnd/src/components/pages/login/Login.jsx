import { useState } from "react";

const Login = () => {
  // toggling between login and Register
  const [currentState, setCurrentState] = useState("Login");

  return (
    <form
      action=""
      method=""
      className="text-text_color border-[1px] border-border_nav rounded-lg mt-10 py-5 px-4 flex flex-col gap-8 shadow-2xl w-[70%] m-auto max-sm:w-[90%]"
    >
      <h1 className="font-bold text-3xl text-rose-600 mb-5">{currentState}</h1>
      {currentState === "Register" && (
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName">First Name:</label>
            <input
              className="border border-black w-full px-2 py-3 rounded-md outline-none"
              type="text"
              placeholder="First Name"
              id="firstName"
              name="firstName"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName">Last Name:</label>
            <input
              className="border border-black w-full px-2 py-3 rounded-md outline-none"
              type="text"
              placeholder="Last Name"
              id="lastName"
              name="lastName"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="birthday">Your Birthday:</label>
            <input
              className="border border-black w-full px-2 py-3 rounded-md outline-none"
              type="date"
              placeholder="Your Birthday"
              id="birthday"
              name="birthday"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="gender">Gender:</label>
            <select
              name="gender"
              id="gender"
              className="border border-black w-full px-2 py-3 rounded-md"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email:</label>
        <input
          className="border border-black w-full px-2 py-3 rounded-md outline-none"
          type="text"
          placeholder="Email"
          id="email"
          name="email"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">Enter Password:</label>
        <input
          className="border border-black w-full px-2 py-3 rounded-md outline-none"
          type="password"
          placeholder="Enter Password"
          id="password"
          name="password"
          required
        />
      </div>
      <button
        type="submit"
        className="border-[1.5px] rounded-md border-rose-600 py-2 px-8 self-center transition-all hover:bg-rose-600 hover:text-white"
      >
        {currentState}
      </button>
      <div className="flex gap-2">
        <input type="checkbox" required />
        <p>Bye, Continuig i agree to the terms of use & privacy policy.</p>
      </div>
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
          <p className="text-center underline text-rose-600 cursor-pointer">
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
