import Table from 'react-bootstrap/Table';
import { useState,useEffect } from 'react';
import backendurl from '../utils/backendurl';
import axios from 'axios';

const Display=()=>{
  const [mydata,setMydata]=useState([]);
const loadData = async () => {
  let api =`${backendurl}students/display`; // Correct route
  const response = await axios.get(api);
  console.log(response.data);
  setMydata(response.data) ;
}

  useEffect(()=>{
    loadData();
  },[])

  let sno=0;
  const answer =mydata.map((key) => {
    sno++;
  <tr>
    <td>{sno}</td>
    <td>{key.name}</td>
    <td>{key.rollno}</td>
    <td>{key.city}</td>
    <td>{key.fees}</td>
  </tr>
});
    return(
        <>
         <h3 className="h33">Student Data display page!!!</h3>
         <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Sno</th>
          <th>Name</th>
          <th>Rollno</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
      </thead>
      <tbody>
         {answer}
      </tbody>
      </Table>
        </>
    )
}
export default Display;



