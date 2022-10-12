//Number Type ---------------------------------------------------------------------------------------------------------
let string: string = "Renish";

//String Type ---------------------------------------------------------------------------------------------------------
let number: number = 22;

//Any Type ---------------------------------------------------------------------------------------------------------
let anyType: any = "Renish";
anyType = 22;

//Array Type ---------------------------------------------------------------------------------------------------------
let arrayNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

//Object Type ---------------------------------------------------------------------------------------------------------
let obj: {
    name: string;
    age: number;
} = {
    name: "Renish",
    age: 22,
};

//enum Type ---------------------------------------------------------------------------------------------------------
enum Week {
    sunday,
    monday,
    tuesday,
}

//Type Aliases ---------------------------------------------------------------------------------------------------------
type Combine = string | number;
let combineData: Combine;
combineData = "Renish";

//Tuple Type ---------------------------------------------------------------------------------------------------------
let tuple: [number, string, boolean];
tuple = [10, "Renish", true];
let arrTuple: [number, string] = [1, "Renish"];

//Literal Type ---------------------------------------------------------------------------------------------------------
let literal: "as-number" | "as-string";
literal = "as-number";
literal = "as-string";

//Union Types ---------------------------------------------------------------------------------------------------------
let unionType: string | number;

//Function Return Type ---------------------------------------------------------------------------------------------------------
function callingFun(): void {
    console.log("Hello, World");
}
function getResult(): undefined {
    console.log("Hello, World");
    return;
}
function getSum(): number {
    return 10 + 20;
}
function getStrs(): string {
    return "Hello" + "World"
}

//Function Type ---------------------------------------------------------------------------------------------------------
function fun() {
    console.log("Renish");
}
let callFun: Function;
callFun = fun; //We Can store only function
// callFun = "String"         //Other Type not working

//Function CallBack Type

