import { Outlet } from "react-router";
import Footer from "./src/component/footer";
import Topnav from "./src/component/header";

const Layout=()=>{
    return(
        <>
        {/* <Header/> */}
        <div id="navbar">
        <Topnav/>
        </div>
        <div id="outlet">
            <Outlet/>
        </div>
         
        <Footer/>
        </>
    )
}
export default Layout;