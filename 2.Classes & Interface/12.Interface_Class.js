"use strict";
class Persons {
    constructor(name) {
        this.name = name;
    }
    greet(phrase) {
        console.log(phrase + this.name);
    }
}
let Users;
Users = new Persons('Renish');
Users.greet("Hii There I Am -");
console.log(Users);
//NOTE: 1.Interface is ude to define a structure of an Object
