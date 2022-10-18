type Combination = number | string;     //Type-Aliases
let com: Combination;
com = "Renish";

//--------------------Type_Aliases For Object-------------------------------------

type User = { name: string; age: number };
const personInfo: User = {
    name: "Renish",
    age: 22,
};
//--------------------Type_Aliases For Function Parameter-------------------------------------

function greet(user: User) {
    return "Hi, I am " + user.name;
}

function isOlder(user: User, checkAge: number) {
    return checkAge > user.age;
}

let greetFun = greet(personInfo);
let isOlderFun = isOlder(personInfo, 20);
console.log("greetFun", greetFun);
console.log("isOlderFun", isOlderFun);

function info(person: User, checkAge: number) {
    return `Hello, ${person.name} ${
        checkAge >= 18 ? "Your Eligible" : "Your are not eligible"
    }`;
}
console.log(info(personInfo, 17));

//------------------------------------------------------------

type Combinable = number | string; //Type_Aliases
type CombinableDescriptor = "as-string" | "as-number"; //Type_Aliases

function Combine_Values(
    num1: Combinable,
    num2: Combinable,
    resultConversion: CombinableDescriptor,
) {
    let result;
    if (
        (typeof num1 === "number" && typeof num2 === "number") ||
        resultConversion === "as-number"
    ) {
        result = +num1 + +num2;
    } else {
        result = num1.toString() + num2.toString();
    }
    return result;
}

const combineValuesNumber = Combine_Values(10, 20, "as-number");
const combineValuesAsNumber = Combine_Values("10", "20", "as-string");
const combineValuesString = Combine_Values("Renish", " Mithani", "as-string");

console.log(combineValuesNumber);
console.log(combineValuesAsNumber);
console.log(combineValuesString);

//--------------Type_Aliases in Function-------------------------

type AsFun = (n1:number,n2:number) => number;
let add: AsFun;

add = (n1:number,n2: number) => {
    return n1 + n2
}
