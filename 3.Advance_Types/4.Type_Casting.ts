const input1 = <HTMLInputElement>document.getElementById("num1")!; //Type casting
const input2 = document.getElementById("num1")! as HTMLInputElement; //Type Casting
const input3 = document.getElementById("num1") as HTMLInputElement; //Type Casting
input1.value = "Some Values...";

//NOTE: 1. ! marks means never return value null

//-----------------------------------------
const paragraph = document.querySelector("p");

if (paragraph) {
    (paragraph as HTMLParagraphElement).innerHTML = "Hello";
}

//---------------------------------------------

function sum(n1: number, n2: number) {
    return n1 + n2;
}

const result = sum(10, 20) as number;    //Type Casting
console.log(result);

//-----------------------------------------------

function _mergeObj(obj1: object, obj2: object) {
    // return { ...obj1, ...obj2 };   //Merge Two Objects
    return Object.assign(obj1, obj2); //Merge Two Objects
}

const results = (_mergeObj({ name: "Person" }, { age: 22 })) as { name: string; age: number }; //Type Casting
console.log(results.name)

