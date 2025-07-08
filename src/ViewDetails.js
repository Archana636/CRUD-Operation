import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ViewDetails() {

  const {studentid}=useParams();
  const [studentData,setStudentData]=useState({});
  useEffect(()=>{
    fetch("http://localhost:5000/students/"+studentid)
    .then((res)=>res.json())
    .then((data)=>setStudentData(data))
    .catch((err)=>console.log(err.message)
  )
  },[studentid]);
  
  return (
    <div className='student-details-container'>
      <h1>Student Details</h1>

      { studentData && <div className='details'>
        <p><strong>ID:</strong>{studentData.id}</p>
        <p><strong>Name:</strong>{studentData.name}</p>
        <p><strong>Age:</strong>{studentData.age}</p>
        <p><strong>Place:</strong>{studentData.place}</p>
    </div>}
        <Link to="/" class="btn btn-back">Back</Link>
    </div>
  )
}

export default ViewDetails;