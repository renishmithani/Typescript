"use strict";
function givValue() {
    //Void Means function not return anything
    console.log("Hello World...");
}
function returnNum(num1, num2) {
    return num1 + num2;
}
function returnStr(str) {
    return str.toUpperCase();
}
function getUndefined() {
    //undefined only when get return keyword only
    console.log("Got Undefined");
    return;
}
function getFunctionTypeArray() {
    console.log('Renish');
    return [10 + 10];
}
let getNumber; //Function Type
getNumber = returnNum;
givValue();
returnNum(10, 20);
returnStr("Renish");
getUndefined();
