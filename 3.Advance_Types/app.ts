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

const p = document.querySelectorAll("input")!;
console.log(p[0].focus());
