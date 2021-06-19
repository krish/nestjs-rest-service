import { Injectable, NotFoundException } from "@nestjs/common";
import { v1 as uuid } from 'uuid'
import { EmployeeCreateDto } from "../dto/EmployeeCreate.dto";
import { Employee } from "../schemas/Employee.schema";
import { EmployeeSearchDto } from "../dto/EmployeeSearch.dto";
import { EmployeeUpdateDto } from "../dto/EmployeeUpdate.dto";
import { EmployeeStatus, EmployeeTier } from "../Employee.enum";
import { Messages } from "../Messages.data";


@Injectable()
export class EmployeeRepository {

    private employees: Employee[] = [
        {
            "id": "00ca6888-af27-4f6f-95bc-4735c326447d",
            "icon": "https://robohash.org/nostrumcommodidolores.png?size=50x50&set=set1",
            "firstName": "Prof",
            "lastName": "Din",
            "designation": "Cyber Security Expert",
            "salary": 400000,
            "rbt": 100,
            "tier": EmployeeTier.TIER_ONE,
            "status": EmployeeStatus.ACTIVE
        }, {
            "id": "305c8624-a214-4a25-93b4-d54dcc411150",
            "icon": "https://robohash.org/earumatquequos.png?size=50x50&set=set1",
            "firstName": "Nairobi",
            "lastName": "Dayn",
            "designation": "Computer System Expert",
            "salary": 350000,
            "rbt": 95,
            "tier": EmployeeTier.TIER_ONE,
            "status": EmployeeStatus.ACTIVE
        }, {
            "id": "fa1ef149-be12-4af9-a76b-e9ce9e7b0d37",
            "icon": "https://robohash.org/delenitiquameum.png?size=50x50&set=set1",
            "firstName": "Charlie",
            "lastName": "Dwyer",
            "designation": "Environmental Specialist",
            "salary": 275000,
            "rbt": 89,
            "tier": EmployeeTier.TIER_TWO,
            "status": EmployeeStatus.ACTIVE
        }, {
            "id": "d864710e-c343-413d-8885-d2d0053fa75b",
            "icon": "https://robohash.org/pariaturminimaminus.png?size=50x50&set=set1",
            "firstName": "Augie",
            "lastName": "Dinsmore",
            "designation": "Software Consultant",
            "salary": 75000,
            "rbt": 60,
            "tier": EmployeeTier.TIER_TWO,
            "status": EmployeeStatus.ACTIVE
        }, {
            "id": "fd38518d-c4bc-492a-b9e6-785d40bb3fd2",
            "icon": "https://robohash.org/quasiitaquevoluptate.png?size=50x50&set=set1",
            "firstName": "Brian",
            "lastName": "Bollis",
            "designation": "Recruiting Manager",
            "salary": 120000,
            "rbt": 30,
            "tier": EmployeeTier.TIER_TWO,
            "status": EmployeeStatus.ACTIVE
        }, {
            "id": "25cba557-eae4-4aa9-9d15-88f36a35480a",
            "icon": "https://robohash.org/consequaturiustocumque.png?size=50x50&set=set1",
            "firstName": "Cyndy",
            "lastName": "Stonier",
            "designation": "Account Executive",
            "salary": 52000,
            "rbt": 10,
            "tier": EmployeeTier.TIER_TWO,
            "status": EmployeeStatus.ACTIVE
        }, {
            "id": "74f29e3e-07e2-4af7-b6c3-959beff92447",
            "icon": "https://robohash.org/voluptatumexcepturiminus.png?size=50x50&set=set1",
            "firstName": "Norina",
            "lastName": "Worling",
            "designation": "Design Engineer",
            "salary": 65000,
            "rbt": 81,
            "tier": EmployeeTier.TIER_TWO,
            "status": EmployeeStatus.ACTIVE
        }, {
            "id": "ee4da4f7-dc2c-4638-9291-c9ac1a9123e4",
            "icon": "https://robohash.org/fugiatperspiciatisqui.png?size=50x50&set=set1",
            "firstName": "Osbourne",
            "lastName": "Figg",
            "designation": "Data Coordiator",
            "salary": 48000,
            "rbt": 70,
            "tier": EmployeeTier.TIER_TWO,
            "status": EmployeeStatus.ACTIVE
        }, {
            "id": "a7872747-3122-4bf4-8297-2ac4f2c852b3",
            "icon": "https://robohash.org/possimusomnisut.png?size=50x50&set=set1",
            "firstName": "Rossie",
            "lastName": "Camfield",
            "designation": "Help Desk Technician",
            "salary": 35000,
            "rbt": 45,
            "tier": EmployeeTier.TIER_TWO,
            "status": EmployeeStatus.ACTIVE
        }, {
            "id": "7d4c3161-5c7b-4686-86cd-26db29668e44",
            "icon": "https://robohash.org/sintmolestiasdolorem.png?size=50x50&set=set1",
            "firstName": "Claudia",
            "lastName": "Kanwell",
            "designation": "Professor",
            "salary": 280000,
            "rbt": 62,
            "tier": EmployeeTier.TIER_TWO,
            "status": EmployeeStatus.ACTIVE
        }]

    async create(employeeCreateDto: EmployeeCreateDto): Promise<Employee> {
        const { firstName,
            lastName,
            designation,
            salary,
            rbt,
            tier } = employeeCreateDto
        const employee = {
            id: uuid(),
            icon: '',
            firstName,
            lastName,
            designation,
            salary,
            rbt,
            tier,
            status: EmployeeStatus.ACTIVE
        }
        this.employees.push(employee)
        return employee;
    }

    async findAll(): Promise<Employee[]> {
        return this.employees;
    }

    async findOne(id: string): Promise<Employee> {
        const employees = await this.findAll();
        let employee = employees.find(employee => employee.id === id)
        if (!employee) {
            throw new NotFoundException(`${id} ${Messages.EMPLOYEE_NOT_EXSIST}`)
        }
        return employee
    }
    async findWithFilters(filter: EmployeeSearchDto) {
        const { designation, name } = filter;
        let employees = await this.findAll();
        if (status) {
            employees = employees.filter(employee => employee.status === status);
        }
        if (name) {
            employees = employees.filter(employee => employee.firstName.includes(name) || employee.lastName.includes(name))
            console.log(employees)
        }
        return employees;

    }
    async update(employee: EmployeeUpdateDto): Promise<Employee> {
        const { id, firstName,
            lastName,
            designation,
            salary,
            rbt,
            tier,
            status
        } = employee;
        let emp = await this.findOne(id)
        emp.firstName = firstName
        emp.lastName = lastName
        emp.designation = designation
        emp.salary = salary
        emp.rbt = rbt,
            emp.tier = tier,
            emp.status = status
        return emp;
    }

    async delete(id: string): Promise<boolean> {
        let employees = await this.findAll();
        this.employees = employees.filter(employee => employee.id != id)
        return (employees.length != this.employees.length)
    }
}
