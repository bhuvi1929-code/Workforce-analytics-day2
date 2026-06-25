import { employees } from "../../data/mockData";
import "./EmployeeTable.css";

const EmployeeTable = () => {
  return (
    <div className="employee-table-container">
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Experience</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
               <td>{emp.id}</td>
               <td>{emp.name}</td>
               <td>{emp.department}</td>
               <td>{emp.designation}</td>
               <td>{emp.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;