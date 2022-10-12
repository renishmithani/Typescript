"use strict";
const personInformation = {
    name: "Renish",
    age: 22,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
};
personInformation.role.push("admin"); //push method allow to add one more item in tuple (NOTE: Typescript cant cath this error while push method)
// person.role[1] = 10
// person.role = [0,'admin','hello'] //This type of assign value, is not allow to add item in tuple
console.log(personInformation.role);
