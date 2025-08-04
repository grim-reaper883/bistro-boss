import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";


const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div className="min-h-screen">
            {noHeaderFooter || <Navbar/>}
            <main className={noHeaderFooter ? "" : "pt-16"}>
                <Outlet/>
            </main>
            {noHeaderFooter || <Footer/>}
        </div>
    );
};

export default Main;