import {BrowserRouter ,Routes,Route} from "react-router-dom"
import Layout from "../layout";
import Home from "./component/home";
import Insert from "./component/insert";
import Update from "./component/update";
import Search from "./component/search";
import Contact from "./component/contact";
import Editdata from "./component/pages/edit ";
import Display from "./component/display";

const App=()=>{
  return(
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="insert" element={<Insert/>}/>
          <Route path="display" element={<Display/>}/>
          <Route path="update" element={<Update/>}/>
          <Route path="search" element={<Search/>}/>
          <Route path="contact" element={<Contact/>}/>
           <Route path="/edit/:id" element={<Editdata/>}/>
          </Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}
export default App;