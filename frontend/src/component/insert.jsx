

import { useState } from "react";
const Insert=()=>{
    const [input,setInput]=useState({})
    const handleinput=(e)=>{
        let value=target.value
        let name=target.name
        setInput({...input,[name]:value})
        console.log(input);
        
    }
    const handlesubmit=(e)=>{
       e.preventDefault();
    //    console.log("form submitted",input);
    let api=`${backendurl}/student/save`;
       
    }
    return(
        <>
        <h1>welcome to insert page!!!!!!!!!!</h1>
        <form action="/save" method="post" id="form">
        enter name:- <input type="text" name="name" onChange={handleinput}/><br/>
        enter rollno:- <input type="text" name="rno" onChange={handleinput}/><br/>
        enter city:- <input type="text" name="city" onChange={handleinput}/><br/>
        enter fees:- <input type="text" name="fees" onChange={handleinput}/><br/>
        <button onClick={handlesubmit}>save</button>
        </form>
        </>
    )
}
export default Insert;