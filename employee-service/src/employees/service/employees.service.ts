import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { EmployeeStatus, EmployeeTier } from '../Employee.enum';
import { v1 as uuid } from 'uuid'
import { EmployeeSearchDto } from '../dto/EmployeeSearch.dto';
import { EmployeeUpdateDto } from '../dto/EmployeeUpdate.dto';
import { EmployeeCreateDto } from '../dto/EmployeeCreate.dto';
import { Messages } from '../Messages.data';
import { Employee } from '../schemas/Employee.schema';
import { EmployeeRepository } from '../repository/employee.repository';

@Injectable()
export class EmployeesService {


    constructor(private employeeRepository: EmployeeRepository) { }

    async getAll(): Promise<Employee[]> {
        return await this.employeeRepository.findAll();
    }


    async create(authHeader: string, employeeCreateDto: EmployeeCreateDto): Promise<Employee> {

        return this.employeeRepository.create(employeeCreateDto);
    }


    search(employeeSearchDto: EmployeeSearchDto) {
        return this.employeeRepository.findWithFilters(employeeSearchDto);
    }

    getById(id: string): Promise<Employee> {

        let employee = this.employeeRepository.findOne(id)
        if (!employee) {
            throw new NotFoundException(`${id} ${Messages.EMPLOYEE_NOT_EXSIST}`)
        }
        return employee
    }
    async update(authHeader: string, employeeUpdatedto: EmployeeUpdateDto): Promise<Employee> {
        return this.employeeRepository.update(employeeUpdatedto)
    }

    async delete(authHeader: string, id: string): Promise<boolean> {
        let x = await this.employeeRepository.delete(id);
        return x;
    }

}
