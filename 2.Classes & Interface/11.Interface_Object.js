"use strict";
let User;
User = {
    name: "Renish",
    age: 22,
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
};
User.greet("Hii There I Am -");
//NOTE: 1.Interface is ude to define a structure of an Object
