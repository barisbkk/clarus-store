import React from "react";

const Login = () => {
  return (
    <div className="loginDiv">
      <div>
        <div>
          <span></span>
          <h1>Clarus Store</h1>
        </div>
        <div>
          <h3>SIGN IN</h3>
          <p>Enter your credentials to access your account</p>
        </div>
        <form>
          <div className="">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div>
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              name="pass"
              placeholder="Enter your password"
              required
            />
          </div>
          <button>Sign In</button>
          <p>
            <span> Forgot your password? </span>
            <span>Reset Password</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
