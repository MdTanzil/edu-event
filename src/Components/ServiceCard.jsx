/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { name, short_description,images,id } = service;
    
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={images.thumbnail} alt="Album" className="h-72 w-96" />
      </figure>
      <div className="card-body max-w-xs">
        <h2 className="card-title roboto ">{name}</h2>
        <p className="barlow">{short_description}</p>
        <div className="card-actions justify-end">
          <Link to={`/services/${id}`}>
            <button className="btn text-white hover:bg-[#F8526B] bg-[#F8526B] roboto">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;