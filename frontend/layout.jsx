import { Outlet } from "react-router-dom";
import Footer from "./src/component/footer";
import Header from "./src/component/header";

const Layout=()=>{
    return(
        <>
        <Header/>
<Outlet/>

       
        <Footer/>
        </>
    )
}
export default Layout;