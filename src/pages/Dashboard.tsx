import KPICard from "../components/KPIWidget/KPICard";
import EmployeeTable from "../components/EmployeeTable/EmployeeTable";
import DepartmentSummary from "../components/DepartmentSummary/DepartmentSummary";

import LineChartComponent from "../components/Charts/LineChartComponent";
import PieChartComponent from "../components/Charts/PieChartComponent";
import AreaChartComponent from "../components/Charts/AreaChartComponent";
import DonutChartComponent from "../components/Charts/DonutChartComponent";

import { FaUsers, FaBullseye } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <>
      {/* Dashboard Banner */}
      <div className="dashboard-banner">
        <h1>Workforce Analytics Dashboard</h1>

        <p>
          Monitor employees, hiring trends,
          attrition rate and department performance.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="kpi-grid">
  <KPICard
    title="Total Employees"
    value="1250"
    icon={<FaUsers />}
    chart={<LineChartComponent />}
  />

  <KPICard
    title="Attrition Rate"
    value="12%"
    icon={<FaChartPie />}
    chart={<PieChartComponent />}
  />

  <KPICard
    title="Hiring Rate"
    value="8%"
    icon={<FaArrowTrendUp />}
    chart={<AreaChartComponent />}
  />

  <KPICard
    title="Skill Coverage"
    value="91%"
    icon={<FaBullseye />}
    chart={<DonutChartComponent />}
  />
</div>

      {/* Employee Table */}
      <h2 className="section-title">
        Employee Table
      </h2>

      <EmployeeTable />

      {/* Department Summary */}
      <DepartmentSummary />
    </>
  );
};

export default Dashboard;