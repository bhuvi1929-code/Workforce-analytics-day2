import type { Employee, Department } from "../models/types";

export const employees: Employee[] = [
  { id: 1, name: "John", department: "IT", designation: "Developer", experience: 2 },
  { id: 2, name: "David", department: "HR", designation: "Recruiter", experience: 3 },
  { id: 3, name: "Sam", department: "Finance", designation: "Analyst", experience: 5 },
  { id: 4, name: "Peter", department: "Admin", designation: "Admin Executive", experience: 2 },
  { id: 5, name: "James", department: "Sales", designation: "Executive", experience: 4 },

  { id: 6, name: "Rahul", department: "IT", designation: "Developer", experience: 2 },
  { id: 7, name: "Kumar", department: "HR", designation: "Recruiter", experience: 3 },
  { id: 8, name: "Arun", department: "Finance", designation: "Analyst", experience: 5 },
  { id: 9, name: "Vijay", department: "IT", designation: "Tester", experience: 2 },
  { id: 10, name: "Ajay", department: "Sales", designation: "Executive", experience: 4 },

  { id: 11, name: "Siva", department: "IT", designation: "Developer", experience: 3 },
  { id: 12, name: "Karthik", department: "HR", designation: "Recruiter", experience: 2 },
  { id: 13, name: "Ravi", department: "Finance", designation: "Analyst", experience: 6 },
  { id: 14, name: "Manoj", department: "Admin", designation: "Office Admin", experience: 4 },
  { id: 15, name: "Hari", department: "Sales", designation: "Executive", experience: 5 },

  { id: 16, name: "Naveen", department: "IT", designation: "Developer", experience: 2 },
  { id: 17, name: "Bala", department: "HR", designation: "Recruiter", experience: 1 },
  { id: 18, name: "Prakash", department: "Finance", designation: "Analyst", experience: 7 },
  { id: 19, name: "Mohan", department: "Admin", designation: "Admin Manager", experience: 3 },
  { id: 20, name: "Surya", department: "Sales", designation: "Executive", experience: 4 },
];

export const departments: Department[] = [
  { id: 1, name: "IT", employees: 5 },
  { id: 2, name: "HR", employees: 4 },
  { id: 3, name: "Finance", employees: 4 },
  { id: 4, name: "Sales", employees: 4 },
  { id: 5, name: "Admin", employees: 3 },
];