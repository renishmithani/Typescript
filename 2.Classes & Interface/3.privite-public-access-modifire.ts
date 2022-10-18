class AddDepartment {
    public name: string;
    private employees: string[];

    constructor(name: string) {
        this.name = name;
        this.employees = [];
    }
    describe(this: AddDepartment) {
        console.log("Department" + this.name);
    }
    addEmployee(employee: string) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const account = new AddDepartment("Account");

account.addEmployee("Person1");
account.addEmployee("Person2");
// account.employees[2] = "Person3";
// account.employees[3] = "Person4";

console.log(account.name);

account.printEmployeeInformation();

//-------------- We can write this way also -(shorthand initialization)-

class AddDepartments {

    private employees: string[];
    constructor(public name: string, private age: number) {
        this.name = name;
        this.age = age;
        this.employees = [];
    }
}

//-------------- We can write this way also -(shorthand initialization)-
class AddDepartmentss {
    
    private employees: string[] = [];
    constructor(public name: string, private age: number) {
        this.name = name;
    }
}

