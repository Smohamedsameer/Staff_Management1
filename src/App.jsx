import { useState } from 'react'
import './App.css'

import HeaderComponent from './Components/HeaderComponent.jsx'
import Employee_Data from './Components/Employee-Data.jsx'
import FooterCompinent from './Components/FooterCompinent.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import EmployeeComponent from './Components/EmployeeComponent.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <BrowserRouter>
<HeaderComponent/>
<Routes>
  <Route path="/" element={<Employee_Data />}></Route>
  <Route path="/employee-data" element={<Employee_Data />}></Route>
  <Route path="/add-employee" element={<EmployeeComponent />}></Route>
   <Route path="/edit-employee/:id" element={<EmployeeComponent />}></Route>
</Routes>

    <FooterCompinent />
    </BrowserRouter>
    </>
  )
}

export default App
