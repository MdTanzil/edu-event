import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

/**
 * TODO:
 * 1. Make and Load json data
 * 2. render every service form a card
 * 3.add Details button that shows service details
 * 4. details page should be private route
 */
const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("./data/service.json")
          .then((res) => res.json())
          .then((data) => setServices(data));
    }, []);
    const location = useLocation()
    
    // console.log(services);
    return (
      <div className="mt-10 mb-10">
        {
          location?.pathname === '/' ?
           (<Helmet>
          <title>eduEvent | Home</title>
        </Helmet>)
         :
        <>
         <Helmet>
          <title>eduEvent | Service</title>
        </Helmet></>
        }
        <h1
          className="text-4xl mb-10 text-black text-center font-bold roboto capitalize"
          data-aos="flip-left"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          our service
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {services?.map((data) => (
            <ServiceCard key={data.id} service={data}></ServiceCard>
          ))}
        </div>
      </div>
    );
};

export default Service;
