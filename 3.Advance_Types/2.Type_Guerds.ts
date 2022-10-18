type checking = {
    name: string;
    age: number;
    date: Date;
};

type admin_check = {
    role: string[];
};

type _combine = checking & admin_check;

function printChecking(obj: _combine) {
    if ("address" in obj) {
        //Check the properties is in parameter or not ( Type Guard )
        console.log(obj.address);
    }
    if ("date" in obj) {
        console.log("Date is " + obj.date);
    }
    if ("age" in obj) {
        console.log("Age is " + obj.age);
    }
}
printChecking({ name: "Renish", age: 22, date: new Date(), role: [] });

//-----------Type Guard In Class-------------------------

class _Car {
    drive() {
        console.log("Driving a car");
    }
}

class _Truck {
    drive() {
        console.log("Driving a Truck");
    }
    loadCargo(amount: number) {
        console.log("Load Cargo..." + amount);
    }
}

type Vehicle = _Car | _Truck;

const v1 = new _Car();
const v2 = new _Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if ("loadCargo" in vehicle) {
        vehicle.loadCargo(1000);
    }
    if (vehicle instanceof _Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);
