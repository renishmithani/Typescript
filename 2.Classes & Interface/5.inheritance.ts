class Departments {
    id: number;
    department: string;
    constructor(id: number, department: string) {
        this.id = id;
        this.department = department;
    }
}

class ITDepartments extends Departments {
    //Inheritance
    admins: string[];
    constructor(id: number, admins: string[]) {
        super(id, "IT");
        this.admins = admins;
    }
}

class AccDepartment extends Departments {
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
}

const it = new ITDepartments(1, ["Renish"]);
const acc = new AccDepartment(2, ["Important Report - 1"]);

acc.addReports("Important Report - 2");
acc.addReports("Important Report - 3");
acc.addReports("Important Report - 4");
acc.addReports("Important Report - 5");
acc.addReports("Important Report - 6");

console.log(it);
console.log(acc);
