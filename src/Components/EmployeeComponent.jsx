import React, { useEffect, useState } from 'react'
import { addemployee, editemployee, updateemployee } from '../EmployeeService'
import { useNavigate,useParams } from 'react-router-dom'

const EmployeeComponent = () => {

const [name,setName] = useState("");
const [address,setAddress] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [number,setNumber] = useState("");
const {id}=useParams();
const [errors,setErrors] = useState({
  name: "",
  address:"",
  email:"",
  password:"",
  number:""
})

useEffect(() =>{
     
     if(id){
      updateemployee(id).then((response) =>{
        setName(response.data.name);
         setAddress(response.data.address);
          setEmail(response.data.email);
           setPassword(response.data.password);
            setNumber(response.data.number);
      }).catch(error =>{
        console.error(error)
      })
     }

},[])


const navigator=useNavigate();
// it is the function() called ini body {functionname}
// const handleaddress=(e)=> setaddress(e.target.value)                        is this the arrow function called in body{(e)=>setEmail(e.target.value)}

// const handleEmail=(e)=>setEmail(e.target.value)  
// function handlefirstname(e){                                              
//   setName(e.target.value)
// }
// function handleaddress(e)                                                     
//   setAddress(e.target.value)
// }
// function handleemail(e){
//   setEmail(e.target.value)
// }
// function handlepassword(e){                                                 
//   setPassword(e.target.value)
// }
// function handlephno(e){
//   setNumber(e.target.value)
// }

function saveorupdateemployee(e){
    e.preventDefault();

   if(validation()){
 const employee={name,address,email,password,number};  
    console.log(employee)

    if(id){
      editemployee(employee,id).then((response) => {
        console.log(response.data)
        navigator("/employee-data")
      }).catch(error=>{
        console.error(error);
      })
    }else{
         addemployee(employee).then((response)=>{
      console.log(response.data);

      navigator("/employee-data")
    }).catch(error =>{
      console.error(error);
    })
    }
         

 
    } 
  }
function validation(){
  let valid=true;

  const errorscopy ={...errors}

  if(name.trim()){
     errorscopy.name="";
  }
  else{
    errorscopy.name="name is required"
    valid=false;
  }
   if(address.trim()){
     errorscopy.address="";
  }
  else{
    errorscopy.address="address is required"
    valid=false;
  }
   if(email.trim()){
     errorscopy.email="";
  }
  else{
    errorscopy.email="E_mail is required"
    valid=false;
  }
   if(password.trim()){
     errorscopy.password="";
  }
  else{
    errorscopy.password="password is required"
    valid=false;
  }
   if(number.trim()){
     errorscopy.number="";
  }
  else{
    errorscopy.number="number is required"
    valid=false;
  }
  
  setErrors(errorscopy);
    return valid;
}
function title(){
  if(id){
    return  <h2 className='text-center'>Update Employee</h2>
  }else{
     return <h2 className='text-center'>Add Employee</h2>
  }
} 

  return (
    <div className='container'>
      <br /> <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {
            title()
          }
          <div className='card-body'>
            <form>
              <div className='form-group mb2'>
                <label className='form-label'>First Name</label>
                <input
                type='text'
                placeholder='enter employee first name'
                name='name'
                value={name}
                className={`form-control ${errors.name?"is-invalid ":" " }`}
                onChange={(e)=> setName(e.target.value)}></input>
                {errors.name && <div className='invalid-feedback'> {errors.name}</div>}
              </div>
              <div className='form-group mb2'>
                <label className='form-label'>address</label>
                <input
                type='text'
                placeholder='enter employee address'
                name='address'
                value={address}
              className={`form-control ${errors.address?"is-invalid ":" " }`}
                onChange={(e)=> setAddress(e.target.value)  }></input>
                      {errors.address && <div className='invalid-feedback'> {errors.address}</div>}
              </div>
              <div className='form-group mb2'>
                <label className='form-label'>Email</label>
                <input
                type='text'
                placeholder='enter employee Email'
                name='Email'
               value={email}
                 className={`form-control ${errors.email?"is-invalid ":" " }`}
                onChange={(e)=> setEmail(e.target.value)  }></input>
                      {errors.email && <div className='invalid-feedback'> {errors.email}</div>}
              </div>
              <div className='form-group mb2'>
                <label className='form-label'>password</label>
                <input
                type='password'
                placeholder='enter employee password'
                name='password'
                value={password}
                 className={`form-control ${errors.password?"is-invalid ":" " }`}
                onChange={(e)=> setPassword(e.target.value)  }></input>
                      {errors.password && <div className='invalid-feedback'> {errors.password}</div>}
              </div>
              <div className='form-group mb2'>
                <label className='form-label'>ph:no</label>
                <input
                type='number'
                placeholder='enter employee phone no'
                name='number'
                value={number}
                 className={`form-control ${errors.number?"is-invalid ":" " }`}
                onChange={(e)=> setNumber(e.target.value)  }></input>
                      {errors.number && <div className='invalid-feedback'> {errors.number}</div>}
              </div>
              <br/>
              <button className='btn btn-success' onClick={saveorupdateemployee} type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeComponent