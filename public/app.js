"use strict";
// function getCalBacks(num1: number,num2: number,printCB: (label: string, result: number) => void) {
//     let result = num1 + num2
//     printCB("Result", result);
// }
// function printResults(label: string, result: number) {
//     console.log(label, result);
// }
// getCalBacks(10, 20, printResults);
//First Way to make function in typescript
const arrowFunctions = (str) => {
    return str.toUpperCase();
};
//Second Way of making function
const difff = str => {
    return str;
};
console.log(difff('Renish'));