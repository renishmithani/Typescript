"use strict";
class Singleton {
    constructor(data) {
        this.data = data;
    }
    static getInstance(data) {
        if (!Singleton._instance) {
            Singleton._instance = new Singleton(data);
        }
        return Singleton._instance;
    }
}
const theOne = Singleton.getInstance("ONE");
console.log(theOne);
const theTwo = Singleton.getInstance("TWO");
console.log(theTwo);
//NOTE: 1.We cant create multiple instance(object of class) in singleton pattern
