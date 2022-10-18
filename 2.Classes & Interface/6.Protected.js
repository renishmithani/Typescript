"use strict";
class Departmentss {
    constructor(id, department) {
        // private employee: string[];  //We can access this properties within the class not in extended class
        this.employee = []; //we can access this properties in all extended class also
        this.id = id;
        this.department = department;
    }
    addEmployee(employee) {
        this.employee.push(employee);
    }
    printEmployee() {
        console.log(this.employee);
    }
}
class ITDepartmentss extends Departmentss {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
class AccDepartments extends Departmentss {
    constructor(id, reports) {
        super(id, "Accounting");
        this.id = id;
        this.reports = reports;
    }
    addReports(report) {
        this.reports.push(report);
    }
    printReport() {
        console.log(this.reports);
    }
    pushEmployee(emp) {
        this.employee.push(emp);
    }
    printEmployee() {
        console.log("Print Employee", this.employee);
    }
    addEmployee(emp) {
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
