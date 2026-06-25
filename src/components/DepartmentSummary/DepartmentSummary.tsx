import "./DepartmentSummary.css";

const DepartmentSummary = () => {
  return (
    <div className="dept-section">
      <h2>Department Summary</h2>

      <div className="dept-grid">
        <div className="dept-card">
          <h3>IT</h3>
          <p>8 Employees</p>
        </div>

        <div className="dept-card">
          <h3>HR</h3>
          <p>4 Employees</p>
        </div>

        <div className="dept-card">
          <h3>Finance</h3>
          <p>4 Employees</p>
        </div>

        <div className="dept-card">
          <h3>Sales</h3>
          <p>4 Employees</p>
        </div>

        <div className="dept-card">
          <h3>Admin</h3>
          <p>2 Employees</p>
        </div>
      </div>
    </div>
  );
};

export default DepartmentSummary;