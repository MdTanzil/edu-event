import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
/**
 * TODO:
 * display errors when
 * - is less than 6 characters
 *- don't have a capital letter
 *- don't have a special character
 * 
 * 
 */

const Register = () => {
    const { registrations } = useContext(AuthContext);
    const handleSubmit =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(!/^ {6,}$/ .test(password));
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
    return (
      <div>
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
                    placeholder="name"
                    className="input input-bordered"
                    name="name"
                    required
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
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;