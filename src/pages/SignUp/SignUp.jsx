import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const [signupErr, setSignupErr] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [createdUserEmail, setCreatedUserEmail] = useState('');
  const [token] = useToken(createdUserEmail)
  const navigate = useNavigate();
  
  if(token) {
    navigate('/');
  }


  const handleSignUp = (data) => {
    console.log(data);
    setSignupErr("");
    const { email, password, name } = data;
    createUser(email, password)
      .then((result) => {
        toast.success("User Created Successfully");
        const userInfo = {
          displayName: name,
        };
        updateUser(userInfo)
          .then(() => {
            console.log("update user");
            saveUser(name, email);
          })
          .catch((err) => console.log(err));

        console.log(result.user);
      })
      .catch((err) => {
        setSignupErr(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("logged in successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.warn(err.message);
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      })
      .catch((err) => console.log(err));
  };

  // const getUserToken = email => {
  //   fetch(`http://localhost:5000/jwt?email=${email}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     if(data.accessToken) {
  //       localStorage.setItem('accessToken', data.accessToken)
  //       navigate('/');
  //     }
  //   })
  // }

  return (
    <div className="h-[480px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center text-black">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("name", { required: "Name is required" })}
            />
            {errors?.name && (
              <p className="text-red-600">{errors?.name?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", { required: "email is required" })}
            />
            {errors?.email && (
              <p className="text-red-600">{errors?.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "password should be at least 6 characters",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special character",
                },
              })}
            />
            {errors?.password && (
              <p className="text-red-600">{errors?.password?.message}</p>
            )}
          </div>
          <input
            type="submit"
            className="btn btn-accent w-full max-w-xs mt-4 mb-3"
            value="Sign Up"
          />
          {signupErr && <p className="text-red-600">{signupErr}</p>}
        </form>
        <p>
          Already have an account?
          <Link to="/login" className="text-secondary">
            login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
