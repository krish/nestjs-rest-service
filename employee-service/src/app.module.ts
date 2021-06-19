import { HttpModule, HttpService, Module } from '@nestjs/common';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [EmployeesModule, HttpModule],
  providers: [],
})
export class AppModule { }
