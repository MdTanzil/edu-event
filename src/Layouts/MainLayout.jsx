import { Outlet } from "react-router-dom";
import SmallNav from "../Components/SmallNav";
import NavBar from "../Components/NaVBar";
import Footer from "../Components/Footer";


const MainLayout = () => {
    return (
        <div>
           <SmallNav></SmallNav>
           <NavBar></NavBar>
            <Outlet></Outlet>
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