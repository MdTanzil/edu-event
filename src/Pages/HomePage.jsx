import { Helmet } from "react-helmet-async";
import Contact from "../Components/Contact";
import Hero from "../Components/Hero/Hero";
import OurTeam from "../Components/OurTeam";
import Service from "../Components/Service";

const HomePage = () => {
    return (
      <div>
        <Helmet>
          <title>eduEvent | Home</title>
          
        </Helmet>
        <Hero></Hero>
        <Service></Service>
        <OurTeam></OurTeam>
        <Contact></Contact>
      </div>
    );
};

export default HomePage;
/**
 * TODO:
 * 1. Hero section design
 * 2.service section design
 * 3.and extra two section
 * 4. 
 * */ 