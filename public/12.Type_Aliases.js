"use strict";
let com;
com = "Renish";
const personInfo = {
    name: "Renish",
    age: 22,
};
//--------------------Type_Aliases For Function Parameter-------------------------------------
function greet(user) {
    return "Hi, I am " + user.name;
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
let greetFun = greet(personInfo);
let isOlderFun = isOlder(personInfo, 20);
console.log("greetFun", greetFun);
console.log("isOlderFun", isOlderFun);
function info(person, checkAge) {
    return `Hello, ${person.name} ${checkAge >= 18 ? "Your Eligible" : "Your are not eligible"}`;
}
console.log(info(personInfo, 17));
function Combine_Values(num1, num2, resultConversion) {
    let result;
    if ((typeof num1 === "number" && typeof num2 === "number") ||
        resultConversion === "as-number") {
        result = +num1 + +num2;
    }
    else {
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
