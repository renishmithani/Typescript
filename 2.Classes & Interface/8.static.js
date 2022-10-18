"use strict";
class Products {
    constructor(name, color) {
        this.name = name;
    }
    static showName(num) {
        return { TotalProduct: num };
    }
}
Products.color = "White";
console.log(Products.color); //We can access static properties withouts creating instance of class
console.log(Products.showName(10)); //We can access static method withouts creating instance of class
