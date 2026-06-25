import type { ReactNode } from "react";
import "./DashboardLayout.css";

interface Props {
  children: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>WAP</h2>

        <nav>
          <a href="/">Dashboard</a>
          <a href="/">Employees</a>
          <a href="/">Departments</a>
          <a href="/">Reports</a>
        </nav>
      </aside>

      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;