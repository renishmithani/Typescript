class Departmentss {
    id: number;
    department: string;
    // private employee: string[];  //We can access this properties within the class not in extended class
    protected employee: string[] = []; //we can access this properties in all extended class also
    constructor(id: number, department: string) {
        this.id = id;
        this.department = department;
    }
    addEmployee(employee: string) {
        this.employee.push(employee);
    }
    printEmployee() {
        console.log(this.employee);
    }
}

class ITDepartmentss extends Departmentss {
    //Inheritance
    admins: string[];
    constructor(id: number, admins: string[]) {
        super(id, "IT");
        this.admins = admins;
    }
}

class AccDepartments extends Departmentss {
    //Inheritance
    reports: string[];
    constructor(id: number, reports: string[]) {
        super(id, "Accounting");
        this.id = id;
        this.reports = reports;
    }
    addReports(report: string) {
        this.reports.push(report);
    }
    printReport() {
        console.log(this.reports);
    }
    pushEmployee(emp: string) {
        this.employee.push(emp);
    }
    printEmployee() {
        console.log("Print Employee", this.employee);
    }
    addEmployee(emp: string) {
        this.employee.push(emp);
    }
}
const departmentss = new Departmentss(0, "Department");
const itD = new ITDepartmentss(1, ["Renish"]);
const accD = new AccDepartments(2, []);

departmentss.addEmployee("Emp - 1");
departmentss.addEmployee("Emp - 2");
departmentss.addEmployee("Emp - 3");
departmentss.addEmployee("Emp - 4");

accD.addEmployee("He");
accD.addEmployee("He");
accD.addEmployee("He");

departmentss.printEmployee();
accD.printEmployee();

// console.log(itD);
// console.log(accD);
