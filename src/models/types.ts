export interface Employee {
  id: number;
  name: string;
  department: string;
  designation: string;
  experience: number;
}

export interface Department {
  id: number;
  name: string;
  employees: number;
}

export interface WorkforceKPI {
  title: string;
  value: string | number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}