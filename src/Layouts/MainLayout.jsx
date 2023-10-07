import { Outlet } from "react-router-dom";
import SmallNav from "../Components/SmallNav";


const MainLayout = () => {
    return (
        <div>
           <SmallNav></SmallNav>
            <Outlet></Outlet>
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