import type { ReactNode } from "react";
import "./KPICard.css";

interface KPIProps {
  title: string;
  value: string | number;
  chart?: ReactNode;
  icon?: ReactNode;
}

const KPICard = ({
  title,
  value,
  chart,
  icon,
}: KPIProps) => {
  return (
    <div className="kpi-card">
      <div className="kpi-header">
        {icon}
        <h3>{title}</h3>
      </div>

      <h2>{value}</h2>

      {chart}
    </div>
  );
};

export default KPICard;