type Admin = {
    name: string;
    work: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee; //Combining Two Types ( Intersection Types )

const E1: ElevatedEmployee = {
    name: "Renish",
    work: ["start-server"],
    startDate: new Date(),
};

//-------------------------------------------------------

interface Addmin {
    name: string;
    age: number;
}

interface Emmployee {
    name: string;
    address: string;
}

type ElevatedEmployeeInterface = Addmin & Emmployee;

//-------------------------------------------------------

interface only {
    name: string;
    age: number;
}
interface onlyInfo {
    address: string;
}

interface bothInterface extends only, onlyInfo {}

//------------------------------------------------

type _person_info = string | number;
type _admin_length = number | boolean;

type person_admin = _person_info & _admin_length;
