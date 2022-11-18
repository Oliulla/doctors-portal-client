import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [loginErr, setLoginErr] = useState('');
  const [loginUserEmail, setLoginUserEmail] = useState('');
  const [token] = useToken(loginUserEmail);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || '/';

  if(token) {
    navigate(from, {replace: true});
  }

  const handleLogin = (data) => {
    setLoginErr("");

    signIn(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        setLoginUserEmail(data.email)
        toast.success('Login Successfully');
      })
      .catch(error => {
        setLoginErr(error.message)
      });
  };

  // google signin
  const handleGoogleSignIn = () => {
    googleSignIn()
    .then((result) => {
      console.log(result.user);
      toast.success('successfully logged in');
    })
    .catch(err => {
      console.log(err);
      toast.warn('logged in failed!!!');
    })
  }



  return (
    <div className="h-[480px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center text-black">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email Address is required" })}
              type="email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p role="alert" className="text-red-600">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 charecters",
                },
              })}
              type="password"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p role="alert" className="text-red-600">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <span className="label-text">Forgot Password?</span>
            </label>
          </div>
          <input
            type="submit"
            className="btn btn-accent w-full max-w-xs mt-4 mb-3"
            value="Login"
          />
          <div>
            {loginErr && <p>{loginErr}</p>}
          </div>
        </form>
        <p>
          New to Doctors Portal?
          <Link to="/signup" className="text-secondary">
            Create new account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
