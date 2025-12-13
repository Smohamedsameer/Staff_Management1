import React,{useEffect, useState} from 'react'
import { deleteemployee, listEmployees } from '../EmployeeService'
import { useNavigate } from 'react-router-dom'

export const Employee_Data = () => {
 
 const [employee,setEmployees] = useState([]) 
const navigator=useNavigate();

useEffect(() =>{
    getAllEmployess();
},[])

function getAllEmployess(){
  listEmployees().then((response) => {
        setEmployees(response.data);
        console.log(response);
    })
    .catch(error => {
       console.error(error);
    })
}
function addnewemployee(){
  navigator("/add-employee")
}
function Update(id){
  navigator(`/edit-employee/${id}`)
}
function removeEmployee(id){
    window.confirm("Are you sure you want to delete?");
     console.log(id)
     
    deleteemployee(id).then((response)=>{
      getAllEmployess();
     }).catch(error =>{
      console.error(error);
     })
}

  return (
    <div className='container'>
        
    <h2 className='text-center'>Employee data</h2>
    <button className='btn btn-primary' onClick={addnewemployee}>Add Employee</button>
    <table className='table table-striped table-bordered'>
        <thead>
            <tr>
            <td>ID</td>
            <td>First Name</td>
            <td>address</td>
<td>E-mail</td>
<td>password</td>
<td>ph:no</td>
<td>Actions</td>
       </tr> </thead>
        <tbody>
            {employee.map(employee =>
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                      <td>{employee.name}</td>
                        <td>{employee.address}</td>
                          <td>{employee.email}</td>
                            <td>{employee.password}</td>
                               <td>{employee.number}</td>
                               <td>
         <button className='btn btn-info' onClick={() => Update(employee.id)}>Update</button>
          <button className='btn btn-danger' onClick={()=> removeEmployee(employee.id)}>Delete</button> 
                 </td>
                </tr>
            )}
        </tbody>

    </table>
</div>


  )
}
export default Employee_Data