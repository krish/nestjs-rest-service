import { IsIn, IsNotEmpty, NotEquals, ValidateIf } from "class-validator"
import { EmployeeStatus, EmployeeTier } from "../Employee.enum"

export class EmployeeUpdateDto {
    id: string
    @IsNotEmpty()
    firstName: string
    @IsNotEmpty()
    lastName: string
    @NotEquals('CEO')
    designation: string
    salary: number
    rbt: number
    tier: EmployeeTier
    status: EmployeeStatus
}