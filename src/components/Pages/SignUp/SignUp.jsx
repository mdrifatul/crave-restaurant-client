import { updateProfile } from "firebase/auth";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxiosSecure";



const SignUp = () => {

  const { createUser,signInWithGoogle } = useAuth();
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const axios = useAxios();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name")
    const email = form.get("email");
    const password = form.get("password");
    const photourl = form.get("photourl")
    const user = {
      name,email, password, photourl
    }
    setRegisterError("");

    // add user info in database
    axios.post('/users',user)
    .then(res=> 
    console.log(res.data))


    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/.test(password)) {
      setRegisterError(
        "password should be at least 6 characters, a capital letter and a special character"
      );
    } else {
      createUser(email, password)
        .then((result) => {
          const user = result.user
          console.log(result.user);
          updateProfile(user, {
            displayName: name,
          });
      
            Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Signup Successfully',
            showConfirmButton: false,
            timer: 1500
          })
          navigate(location?.state ? location.state : '/')
          e.target.reset();    
        })
        .catch((error) => {
          console.error(error);
        });
    }
 
  };

  const handleGoogleSignin = () =>{
    signInWithGoogle()
    .then(result =>{
      console.log(result.user);
      const googleuser = result.user
      const googleUserData = {
        displayName: googleuser.displayName,
        email: googleuser.email,
        photoURL:googleuser.photoURL
        // Add any other user data you want to store
      };
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Signup Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      console.log(location);
      navigate(location?.state ? location.state : '/')

      axios.post('/users', googleUserData)
      .then(res => console.log(res.data))
    })
    .catch(error =>{
      console.error(error);
    })
  }



  return (
    <div>
      <div className="mb-10">
        <h2 className="text-3xl my-3 text-center font-bold">SIGN UP</h2>
        <form
        onSubmit={handleRegister}
          className="w-4/5 md:w-1/4 mx-auto"
        >
          <div className="form-control">
            {/* <label className="label">
              <span className="label-text">Name</span>
            </label> */}
            <input
              type="text"
              required
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control my-2">
            {/* <label className="label">
              <span className="label-text">Email</span>
            </label> */}
            <input
              type="email"
              required
              name="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            {/* <label className="label">
              <span className="label-text">Password</span>
            </label> */}
            <input
              type="password"
              required
              name="password"
              placeholder="Password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-2">
            {/* <label className="label">
              <span className="label-text">PhotoURL</span>
            </label> */}
            <input
              type="text"
              name="photourl"
              placeholder="PhotoURL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#7DA640] text-white ">
              Register
            </button>
          </div>
        </form>

        {registerError && (
            <p className="text-red-600  text-center text-red mt-2">{registerError}</p>
          )}
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link className="text-red-500 font-bold" to="/login">
              Login
            </Link>
          </p>
          <hr className="w-3/5 mx-auto my-3 " />
          <div className="flex justify-center items-center ">
            <button onClick={handleGoogleSignin} className="mx-auto btn border-blue  w-fit ">
              <FcGoogle className=" text-2xl"></FcGoogle>
              Login with Google
            </button>
          </div>
      </div>
    </div>
  );
};

export default SignUp;