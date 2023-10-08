/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
/**
 * TODO:
 * display errors when
 * - is less than 6 characters
 *- don't have a capital letter
 *- don't have a special character
 * name and photo url update
 * 
 */

const Register = () => {
    const { registrations, signInWithGoogle, updateUserData } =
      useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleSubmit =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const displayName = e.target.name.value || "";
        const url = e.target.photo_url.value || ''
        
        if(!/^.{6,20}$/.test(password)){
            toast.error(
              "Password should be contain 6 characters "
            )
            return;
        }else if (!/^.*[A-Z].*/.test(password)) {
          toast.error("don't have a capital letter ");
          return;
        } else if (!/^.*[^A-Za-z0-9].*/.test(password)) {
          toast.error("don't have a special leater ");
          return;
        } else {
          registrations(email, password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user);
              e.target.reset();
              toast.success("Registrations Successful !");
              if (displayName && url) {
                updateUserData(displayName, url);
              } else if (displayName) {
                updateUserData(displayName, "");
              } else if (url) {
                updateUserData('', url);
              }
              navigate(location?.state ? location.state : "/");
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.warn(errorCode,errorMessage);
            });
        }

        
        // registrations(email,password);
    }
    const handleGoogleButton = () => {
      signInWithGoogle()
        .then((result) => {
          toast.success('Login successful')
          navigate(location?.state ? location.state : "/");
        })
        .catch((error) => {
          toast.error("Something went wrong");
        });

    }
    return (
      <div>
        <Helmet>
          <title>eduEvent | Register</title>
          
        </Helmet>
        <div
          className="hero min-h-screen bg-base-200"
          style={{
            backgroundImage: 'url("/SVG/drawkit-transport-scene-4.svg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#ffa0ae",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="hero-content flex-col  lg:flex-row-reverse items-center justify-center">
            <div className="text-center lg:text-left  flex-1 ">
              <h1 className="text-5xl font-bold roboto  ">Register now!</h1>
              <p className="py-6  roboto">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-1 w-full max-w-lg shadow-2xl bg-[#f1e5e7]  ">
              <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name (optional)"
                    className="input input-bordered"
                    name="name"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo url</span>
                  </label>
                  <input
                    type="text"
                    placeholder="photo url (optional)"
                    className="input input-bordered "
                    name="photo_url"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                    name="password"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn hover:bg-[#f8526b] bg-[#f8526b] text-white"
                  >
                    Register
                  </button>
                </div>
                <p>
                  Already Have a account ?{" "}
                  <Link
                    to={"/login"}
                    className="text-bold text-[#f8526b] underline"
                  >
                    Log In
                  </Link>{" "}
                </p>
              </form>
              <div className="flex justify-center items-center ">
                <button
                  onClick={handleGoogleButton}
                  type="button"
                  className=" w-4/5 bg-[#f8526b] text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center  mr-2 mb-2"
                >
                  <svg
                    className="mr-2 -ml-1 w-4 h-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    ></path>
                  </svg>
                  Sign in with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;