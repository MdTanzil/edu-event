import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
    const [data,setData] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        fetch("/data/service.json")
          .then((res) => res.json())
          .then((data) => setData(data));
          
    }, []);
    const findData = data?.find(data => data.id == id);
    // console.log(findData?.images.cover);
    const image = findData?.images.cover;
    return (
      <div
        className="hero min-h-screen my-8"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-left text-neutral-content">
          <div className="max-w-">
            <h1 className="mb-5 text-5xl font-bold text-[#F8526B] roboto">
              {findData?.name}
            </h1>
            <p className="mb-5  text-left font-medium barlow">
              {findData?.description}
            </p>
            <p className="roboto text-xl font-bold my-10"> Contact us for more information </p>
            <button className="btn-sm bg-gray-600 text-white roboto">Contact us</button>
          </div>
        </div>
      </div>
    );
};

export default ServiceDetails;