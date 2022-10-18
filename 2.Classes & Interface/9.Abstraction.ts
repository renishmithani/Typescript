abstract class departments {
    id: number;
    department: string;
    constructor(id: number, department: string) {
        this.id = id;
        this.department = department;
    }
    abstract describe(): void;
}

class departmentIT extends departments {
    //Inheritance
    admins: string[];
    constructor(id: number, admins: string[]) {
        super(id, "IT");
        this.admins = admins;
    }
    describe(): void {
        console.log("IT Department " + this.department + this.id);
    }
}

class departmentACC extends departments {
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
