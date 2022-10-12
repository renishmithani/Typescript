"use strict";
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", () => {
    console.log("Total Sum is ", add(+input1.value, +input2.value));
});
const obj = {
    name: "Renish",
    age: 22,
};
// console.log(obj.age);
const arr = [1, 2, "A", 3, "B", 4, "C"];
// console.log(arr)
const person = {
    name: "Renish",
    age: 22,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
};
// person.role.push("admin");   //push method allow to add one more item in tuple
// person.role[1] = 10          
// person.role = [0,'admin','hello'] //This type of assign value, is not allow to add item in tuple
// console.log(person.role);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["READ_ONLY"] = 11] = "READ_ONLY";
    Role[Role["AUTHOR"] = 12] = "AUTHOR";
})(Role || (Role = {})); //enum is a special "class" that represents a group of constants (unchangeable variables).
const information = {
    name: 'Renish',
    age: 22,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
if (information.role === Role.READ_ONLY) {
    console.log('Read Only');
}
console.log(Role);
