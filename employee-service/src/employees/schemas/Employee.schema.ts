
import { EmployeeStatus, EmployeeTier } from "../Employee.enum";

/* export const EmployeeSchema=({
    id: String,
    firstName: String,
    lastName: String,
    designation: String,
    nearestCity: String,
    tier: EmployeeTier,
    status: EmployeeStatus
}) */

export class Employee {
    id: string
    icon: string
    firstName: string
    lastName: string
    designation: string
    salary: number
    rbt: number
    tier: EmployeeTier
    status: EmployeeStatus

}
