"use strict";
class Departments {
    constructor(name) {
        this.employees = [];
        this.name = name;
    }
    describe() {
        console.log('Department' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const account = new Departments("Account");
account.addEmployee("Person1");
account.addEmployee("Person2");
// account.employees[2] = "Person3";
// account.employees[3] = "Person4";
// account.employees[4] = "Person5";
// account.employees[5] = "Person6";
console.log(account.name);
account.printEmployeeInformation();
