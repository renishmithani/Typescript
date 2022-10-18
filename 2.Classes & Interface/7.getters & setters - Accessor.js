"use strict";
class Cars {
    constructor(name, color, modelYear) {
        this.allCarName = ["volvo", "suzuki", "hundai"];
        this.totalCars = 0;
        this.name = name;
        this.color = color;
        this.modelYear = modelYear;
    }
    get showTotalCars() {
        return `${this.allCarName}, ${this.totalCars}`;
    }
    set setTotalCars(num) {
        this.addTotalCar(num);
    }
    addTotalCar(num) {
        this.totalCars = num;
    }
}
const car = new Cars("Volvo", "Black", 2022);
car.setTotalCars = 10;
console.log();
console.log(car.showTotalCars);
//NOTE: 1. Getters and setters are also called Accessor
