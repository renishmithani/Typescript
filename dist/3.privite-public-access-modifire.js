"use strict";
class Departments {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log("Department" + this.name);
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
account.employees[2] = "Person3";
account.employees[3] = "Person4";
console.log(account.name);
account.printEmployeeInformation();
//-------------- We can write this way also -(shorthand initialization)-
class Departmentss {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
        this.employees = [];
    }
}
//-------------- We can write this way also -(shorthand initialization)-
class Departmentsss {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.employees = [];
        this.name = name;
    }
}
