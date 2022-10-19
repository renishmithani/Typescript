function Logger(target: Function) {
    //Decorator Runs when class is define, Not run at initiate class ( Object Creation )
    console.log("Logger Function....");
    console.log(target);
}

@Logger
class _Person {
    employee: string[] = ["Person-1", "Person-2", "Person-3", "Person-4"];
    id: number = 0;
    constructor() {
        console.log("Constructor is running...");
    }
    getEmployeeList(): undefined {
        console.log(this.employee);
        return;
    }
}

const P = new _Person();
console.log(P);
