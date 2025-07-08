import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function CreateStudent() {
  const [id,setId]=useState("");
  const [name,setName]=useState("");
  const [age,setAge]=useState("");
  const [place,setPlace]=useState("");
  const [validation,setValidation]=useState(false);
  const navigate = useNavigate();

  const handleSubmit =(e)=>{
    e.preventDefault();
    const studentData={id,name,age,place};
    console.log(studentData);
    fetch("http://localhost:5000/students",{
      method:'POST',
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify(studentData)
     })
    .then((res)=>{
      alert("Student Data saved successfully");
      navigate("/")
    })
      .catch((err)=>console.log(err.message))
    
    }
  return (
    <div className='container'>
        <h2>Add New Student</h2>

        <form onSubmit={handleSubmit}> 

        <label htmlFor="id">ID</label>
        <input type='text' id="id" name="id" required value={id} 
        onChange={e=>setId(e.target.value)} onMouseDown={()=> setValidation(true)}/>
        {id.length===0 && validation && <span className='errMsg'>
          Please enter your id</span>}

         <label htmlFor="name">Name</label>
        <input type='text' id="name" name="name" required value={name} 
        onChange={e=>setName(e.target.value)} onMouseDown={()=> setValidation(true)}/>
        {name.length===0 && validation && <span className='errMsg'>
          Please enter your name</span>}

         <label htmlFor="age">Age</label>
        <input type='text' id="age" name="age" required value={age} 
        onChange={e=>setAge(e.target.value)} onMouseDown={()=> setValidation(true)}/>
        {age.length===0 && validation && <span className='errMsg'>
          Please enter your age</span>}

         <label htmlFor="place">Place</label>
        <input type='text' id="place" name="place"  required value={place}
         onChange={e=>setPlace(e.target.value)} onMouseDown={()=> setValidation(true)}/>
        {place.length===0 && validation && <span className='errMsg'>
          Please enter your place</span>}

        <div>
            <button className="btn.btn-save">Save</button>
            <Link to="/" className="btn btn-back">Back</Link>
        </div>
        
    </form>
    
    </div>
  )
}

export default CreateStudent;