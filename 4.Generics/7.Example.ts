//-----------------Ex:- 1------------------------------------
type ExtendsString = string;
function getValue<T>(num1: T): string {
    return num1 + " Hello";
}

let _getResult = getValue(10);
console.log(_getResult);

//-----------------Ex:- 2------------------------------------

function getObject<O>(objA: O, objB: O): O {
    return { ...objA, ...objB };
}

let objResult = getObject({ name: "Person - 1" }, { address: "Bhavnagar" });
console.log(objResult);

//-----------------Ex:- 3------------------------------------

let _array: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//-----------------Ex:- 4------------------------------------

let _Promise: Promise<any> = new Promise((resolve, reject) => {
    let random: boolean = Math.random() > 0.5;
    // if (random) resolve("Resolve");
    // reject('Rejected');
    random ? resolve("Resolve") : reject("Rejected");
})
    .then((res: any) => console.warn(res))
    .catch((err: any) => {
        console.error(err);
    });

//------------------Ex:- 5------------------------------------

const things = <T>(arr: T[]): T => {
    //Generic Types are flexible type ( we no need to change type )
    return arr[arr.length - 1];
};

let _getNumber = things([1, 2, 3, 4, 5, 6, 7]);
let _getString = things(["A", "B", "C", "D", "E", "F", "G"]);

console.log(_getNumber);
console.log(_getString);

//--------------Ex:- 6------------------------------------------

function gettingObjects<T extends { name: string; age: number }>(obj: T) {
    return { ...obj };
}
const _gettingObjects = gettingObjects({ name: "Person", age: 22 });

//--------------Ex:- 7------------------------------------------

interface functionStructure {
    name: string;
    age: number;
}

function getting<T extends functionStructure>(obj: T) {
    return { ...obj };
}
const _getting = gettingObjects({ name: "Person", age: 22 });
