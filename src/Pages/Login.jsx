import { Link } from "react-router-dom";


const Login = () => {
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
              <h1 className="text-5xl font-bold roboto ">Login now!</h1>
              <p className="py-6  roboto">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-1 w-full max-w-lg shadow-2xl bg-rose-100  ">
              <form className="card-body">
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
                    Login
                  </button>
                </div>
                <p>
                  Do not have account ? <span> </span>
                  <Link
                    to={"/register"}
                    className="text-bold text-[#f8526b] underline"
                  >
                    Sign Up
                  </Link>{" "}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;