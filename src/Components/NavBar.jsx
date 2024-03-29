/**
 * TODO:
 * 1.Active nav link
 * 
 * 
 */
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

 

const NavBar = () => {
  const{user} = useContext(AuthContext)
  
    const navList = (
      <>
        <li className="font-medium ">
          <NavLink to={"/"} className="py-2">
            Home
          </NavLink>
        </li>
        <li className="font-medium  ">
          <NavLink to={"/events"} className="py-2">
            Events
          </NavLink>
        </li>

        <li className="font-medium ">
          <NavLink to={"/services"} className="py-2">
            Service
          </NavLink>
        </li>
        <li className="font-medium ">
          <NavLink to={"/blogs"} className="py-2">
            Blogs
          </NavLink>
        </li>
      </>
    );
    return (
      <div className="navbar bg-base-100 barlow">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow capitalize bg-base-100 rounded-box w-52"
            >
              {navList}
            </ul>
          </div>
          <a className="normal-case text-3xl font-extrabold text-[#F8526B]">
            <span className="text-black text-xl">Edu</span>Event
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 capitalize">{navList}</ul>
        </div>
        <div className="navbar-end">
          {(user && user?.displayName) && (
            <>
              <p>
                {" "}
                Hello !<span className="text-[#F8526B] font-semibold">{user?.displayName} </span>
                {"  "}
              </p>
            </>
          )}
          {user && (
            <>
              {user?.photoURL ? (
                <div className="avatar online">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </div>
              ) : user?.displayName ? (
                <div className="avatar online placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                    <span className="text-xl">{user?.displayName[0]}</span>
                  </div>
                </div>
              ) : (
                <div className="avatar online placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                    <span className="text-xl">{user?.email[0]}</span>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
};

export default NavBar;