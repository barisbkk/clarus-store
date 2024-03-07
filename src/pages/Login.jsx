import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@aa.com" && pass === "admin") {
      login({ email, pass });
    } else {
      Swal.fire("Kullancı bilgileri yanlış!");
    }
  };

  return (
    <div className="loginDiv">
      <div className="h-[500px] w-11/12 sm:w-[475px] bg-white rounded-[20px] p-5 flex justify-between flex-col text-center">
        <div className="flex justify-center items-center mt-2 gap-2">
          <span className="w-[6px] bg-yellow-500 h-[39px]"></span>
          <h1 className="text-[22px] sm:text-[32px] font-montserrat font-[700] uppercase">
            Clarus Store
          </h1>
        </div>
        <div className="my-2">
          <h3 className="font-montserrat font-[600] text-[22px] uppercase text-black">
            SIGN IN
          </h3>
          <p className="font-montserrat text-labelColor text-label mt-1">
            Enter your credentials to access your account
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-left p-3 gap-5"
        >
          <div className="flex flex-col gap-2">
            <label
              className="font-montserrat text-label text-labelColor hover:cursor-pointer hover:after:content-['admin@aa.com'] hover:after:text-black hover:after:pl-3 hover:after:underline"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="login-input" //ortak özellikleri @layer components altında topladık
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              // autoFocus
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="font-montserrat text-label text-labelColor hover:cursor-pointer hover:after:content-['admin'] hover:after:text-black hover:after:pl-3 hover:after:underline"
              htmlFor="pass"
            >
              Password
            </label>
            <input
              className="login-input"
              type="password"
              name="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-main h-[44px] font-montserrat text-label text-white uppercase hover:opacity-90 rounded-[4px]"
          >
            Sign In
          </button>
          <p className="flex justify-center items-center flex-wrap">
            <span className="text-label font-montserrat font-[400] text-labelColor">
              {" "}
              Forgot your password?{" "}
            </span>
            <span className="text-main text-[14px] font-montserrat font-[500] underline ml-1 hover:cursor-pointer ">
              Reset Password
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
