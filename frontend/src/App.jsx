import Layout from "../layout";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./component/home";
import Insert from "./component/insert";
import Display from "./component/display";
import Update from "./component/update";
import Search from "./component/search";
import Contact from "./component/contact";
const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
<Route path="home" element={<Home/>}/>
<Route path="insert" element={<Insert/>}/>
<Route path="display" element={<Display/>}/>
<Route path="update" element={<Update/>}/>
<Route path="search" element={<Search/>}/>
<Route path="contact" element={<Contact/>}/>


      </Route>
      </Routes></BrowserRouter>
    </>
  )
}
export default App;