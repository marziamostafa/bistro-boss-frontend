import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation();
    console.log(location);
    const isLoginPage = location.pathname.includes('login')
    const isSignUpPage = location.pathname.includes('signup')
    return (
        <div>
            {isLoginPage || isSignUpPage || <Navbar />}
            <Outlet></Outlet>
            {isLoginPage || isSignUpPage || <Footer></Footer>}
        </div>
    );
};

export default Main;