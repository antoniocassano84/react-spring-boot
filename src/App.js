import { useEffect, useState } from "react";
import employeeService from "./services/employee.service";

const App = () => {

  const [employees, setEmployees] =  useState([]);

  useEffect(() => {
    employeeService.getAll()
    .then( response => {
      console.log('Printing the employees data', response.data);
      setEmployees(response.data);
    })
    .catch(error => {
      console.log('Something went wrong', error);
    })
  }, [])

  return ( 
    <div>
      <h3>List of employees</h3>
      <div>
        <table border="1" cellPadding="10">
          <tr>
            <td>Name</td>
            <td>Location</td>
            <td>Department</td>
          </tr>
          {
            employees.map(employee => {
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.location}</td>
                <td>{employee.department}</td>
              </tr>
            })
          }
        </table>
      </div>
    </div>
   );
}
 
export default App;
