import { Outlet } from "react-router-dom";
import SmallNav from "../Components/SmallNav";
import NavBar from "../Components/NaVBar";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div>
            <Toaster/>
           <SmallNav></SmallNav>
           <NavBar></NavBar>
           <div className="container mx-auto">

            <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;


/**
 * TODO:
 * 1. Small Header design 
 * 2. Nav bar design
 * 3. Footer design
 * 
 * 
 * 
 * 
 * 
 * 
 * */   