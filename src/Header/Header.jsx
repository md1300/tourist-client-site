import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Header = () => {
    return (
        <div>
            <div className="h-24">
               <Navbar/>
            </div>
            <Outlet/>
        </div>
    );
};

export default Header;
