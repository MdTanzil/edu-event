/**
 * TODO:
 * 1.Active nav link
 * 
 * 
 */
import { NavLink } from "react-router-dom";

 

const NavBar = () => {
    const navList = (
      <>
        <li className="font-medium ">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="font-medium ">
          <NavLink to={"/events"}>Events</NavLink>
        </li>

        <li className="font-medium ">
          <NavLink to={"/services"}>Service</NavLink>
        </li>
        <li className="font-medium ">
          <NavLink to={"/blogs"}>Blogs</NavLink>

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
          {/* <a className="btn">Button</a> */}
        </div>
      </div>
    );
};

export default NavBar;