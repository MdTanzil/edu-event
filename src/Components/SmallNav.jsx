import Marquee from "react-fast-marquee";
import { FiLogIn } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import { SiGnuprivacyguard } from "react-icons/si";
const SmallNav = () => {
  return (
    <div className="flex bg-[rgb(4,10,23)] flex-wrap flex-col lg:flex-row text-white justify-between items-center">
      <div className="barlow  py-4 ml-6  lg:ml-6 flex items-center">
        <p className="inline-block ">Latest Activity:</p>
        <p className="lg:w-96 ml-2 p-1">
          <Marquee className="">
            <p className="font-medium  text-[#F8526B]">
              International Conference on Linguistics and English Literature
              (ICLELL) offers a platform for researchers and experts to discuss
              advancements in linguistics and literature. Papers will be
              peer-reviewed...
            </p>
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
        <button className="btn-sm text-lg"> <BiSearchAlt /></button>

        <div className="flex items-center btn-sm justify-center ">
          <FiLogIn></FiLogIn>
          <button className=" ml-2">Login</button>
        </div>
        <div className="flex items-center btn-sm justify-center ">
          <SiGnuprivacyguard></SiGnuprivacyguard>
          <button className=" ml-2">Register</button>
        </div>
      </div>
    </div>
  );
};

export default SmallNav;
    