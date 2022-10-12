"use strict";
//Number Type ---------------------------------------------------------------------------------------------------------
let string = "Renish";
//String Type ---------------------------------------------------------------------------------------------------------
let number = 22;
//Any Type ---------------------------------------------------------------------------------------------------------
let anyType = "Renish";
anyType = 22;
//Array Type ---------------------------------------------------------------------------------------------------------
let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
//Object Type ---------------------------------------------------------------------------------------------------------
let obj = {
    name: "Renish",
    age: 22,
};
//enum Type ---------------------------------------------------------------------------------------------------------
var Week;
(function (Week) {
    Week[Week["sunday"] = 0] = "sunday";
    Week[Week["monday"] = 1] = "monday";
    Week[Week["tuesday"] = 2] = "tuesday";
})(Week || (Week = {}));
let combineData;
combineData = "Renish";
//Tuple Type ---------------------------------------------------------------------------------------------------------
let tuple;
tuple = [10, "Renish", true];
let arrTuple = [1, "Renish"];
//Literal Type ---------------------------------------------------------------------------------------------------------
let literal;
literal = "as-number";
literal = "as-string";
//Union Types ---------------------------------------------------------------------------------------------------------
let unionType;
//Function Return Type ---------------------------------------------------------------------------------------------------------
function callingFun() {
    console.log("Hello, World");
}
function getResult() {
    console.log("Hello, World");
    return;
}
function getSum() {
    return 10 + 20;
}
function getStrs() {
    return "Hello" + "World";
}
//Function Type ---------------------------------------------------------------------------------------------------------
function fun() {
    console.log("Renish");
}
let callFun;
callFun = fun; //We Can store only function
// callFun = "String"         //Other Type not working
//Function CallBack Type
function printCallBack(num1, num2, callBackFun) {
    let result = num1 + num2;
    callBackFun('Result', result);
}
function printResultValue(label, result) {
    console.log(label, result);
}
console.log(printCallBack(10, 20, printResultValue));
//Unknown
let unknown;
let numbersT = 60;
unknown = "Renish";
unknown = 50;
unknown = numbersT;
console.log(unknown);
// unknown.toUpperCase()    //We cant use any method because of unknown type
