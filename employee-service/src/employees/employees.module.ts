import { HttpModule, Module } from '@nestjs/common';
import { EmployeeRepository } from './repository/employee.repository';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './service/employees.service';


@Module({
  imports: [HttpModule],
  controllers: [EmployeesController,],
  providers: [EmployeesService, EmployeeRepository]
})
export class EmployeesModule { }
