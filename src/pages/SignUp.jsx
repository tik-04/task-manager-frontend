import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import list_check from "../assets/list_check.svg"

const SignUp = () => {
  const [username,SetUsername] = useState("")
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [register,SetRegister] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/register", {
        username,
        email,
        password,
      });

      if(!response.data?.success){
        SetRegister(false)
      }

      if (response.status === 201) {
        SetRegister(true);
    }    

    } catch (error) {
      console.error("Error:", error.response?.data || error.message);

      if (error.response) {
        setError(error.response.data?.message || "Invalid email or password");
      } else if (error.request) {
        setError("Cannot connect to server. Please try again.");
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  return (
    <div className="">

      {error && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold text-red-600">Error</h2>
            <p className="text-gray-700">{error}</p>
            <button
              onClick={() => setError("")}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}


    {register && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold text-green-600">Success</h2>
            <p className="text-gray-700">Register Success fully</p>
            <button
              onClick={() => SetRegister(false)}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}


      <section class="bg-gray-100">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 d"
          >
            <img
              class="w-8 h-8 mr-2"
              src={list_check}
              alt="logo"
            />
            TikTaskTow
          </a>
          <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign Up
              </h1>

              <form class="space-y-4 md:space-y-6" onSubmit={handleRegister}>
                <div>
                  <label
                    for="username"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="username"
                    value={username}
                    onChange={(e) => SetUsername(e.target.value)}
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => SetEmail(e.target.value)}
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                {/* <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div> */}
                <button
                  type="submit"
                  class="w-full text-white bg-[#2563eb] hover:bg-[#1d4ed8] focus:ring-4 focus:outline-none focus:ring-[#93c5fd] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign up
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Alraedy Have an account?{" "}
                  <a
                    class="font-medium text-[#2563eb] hover:underline"
                    onClick={() => navigate("/login")}
                  >
                    Log in
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
