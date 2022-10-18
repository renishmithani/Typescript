"use strict";
class departments {
    constructor(id, department) {
        this.id = id;
        this.department = department;
    }
}
class departmentIT extends departments {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT Department " + this.department + this.id);
    }
}
class departmentACC extends departments {
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
    describe() {
        console.log("Accounting Department - ID " + this.id);
    }
}
const itDepartment = new departmentIT(1, ["Renish"]);
const accDepartment = new departmentACC(2, ["Important Report - 1"]);
acc.addReports("Important Report - 2");
acc.addReports("Important Report - 3");
acc.addReports("Important Report - 4");
acc.addReports("Important Report - 5");
acc.addReports("Important Report - 6");
console.log(itDepartment);
console.log(accDepartment);
accDepartment.describe();
itDepartment.describe();
