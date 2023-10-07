import Marquee from "react-fast-marquee";
import { FiLogIn } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import { SiGnuprivacyguard } from "react-icons/si";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
const SmallNav = () => {
  const { user, logout ,loading } = useContext(AuthContext);
  const logOutHandle = () => {
    
    logout()
      .then(() => {
        toast.success('Logged out')
      })
      .catch((error) => {
        // An error happened.
      });

  };

  return (
    <div className="flex bg-[rgb(4,10,23)] flex-wrap flex-col lg:flex-row text-white justify-between items-center">
      <div className="barlow  py-4 ml-6  lg:ml-6 flex items-center">
        <p className="inline-block ">Latest Activity:</p>
        <p className="lg:w-96 ml-2 p-1">
          <Marquee className="font-medium  text-[#f8526b]">
            International Conference on Linguistics and English Literature
            (ICLELL) offers a platform for researchers and experts to discuss
            advancements in linguistics and literature. Papers will be
            peer-reviewed...
          </Marquee>
        </p>
      </div>
      <div className="flex items-center">
        <div className="form-control ">
          <input
            type="text"
            placeholder="Search"
            className="input-sm bg-[#282d38] input-bordered w-24 md:w-auto rounded-lg"
          />
        </div>
        <button className="btn-sm text-lg">
          {" "}
          <BiSearchAlt />
        </button>

        {!loading ?
          (user ? (
            <Link to={"/"}>
              <div className="flex items-center btn-sm justify-center ">
                <FiLogIn></FiLogIn>
                <button onClick={logOutHandle} className=" ml-2">
                  LogOut
                </button>
              </div>
            </Link>
          ) : (
            <>
              <Link to={"/login"}>
                <div className="flex items-center btn-sm justify-center ">
                  <FiLogIn></FiLogIn>
                  <button className=" ml-2">Login</button>
                </div>
              </Link>
              <Link to={"/register"}>
                <div className="flex items-center btn-sm justify-center ">
                  <SiGnuprivacyguard></SiGnuprivacyguard>
                  <button className=" ml-2">Register</button>
                </div>
              </Link>
            </>
          )): <p className="text-sm text-rose-300">Loading</p>}
        {/* <Link to={"/register"}>
          <div className="flex items-center btn-sm justify-center ">
            <SiGnuprivacyguard></SiGnuprivacyguard>
            <button className=" ml-2">Register</button>
          </div>
        </Link> */}
        {/* <Link to={"/register"}>
          <div className="flex items-center btn-sm justify-center ">
            <SiGnuprivacyguard></SiGnuprivacyguard>
            <button className=" ml-2">Register</button>
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default SmallNav;
