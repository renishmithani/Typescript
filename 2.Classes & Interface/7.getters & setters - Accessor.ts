class Cars {
    name: string;
    color: string;
    modelYear: number;
    private allCarName: string[] = ["volvo", "suzuki", "hundai"];
    private totalCars: number = 0;
    constructor(name: string, color: string, modelYear: number) {
        this.name = name;
        this.color = color;
        this.modelYear = modelYear;
    }
    get showTotalCars() {
        return `${this.allCarName}, ${this.totalCars}`;
    }
    set setTotalCars(num: number) {
        this.addTotalCar(num);
    }
    addTotalCar(num: number) {
        this.totalCars = num;
    }
}

const car = new Cars("Volvo", "Black", 2022);
car.setTotalCars = 10;
console.log();
console.log(car.showTotalCars);

//NOTE: 1. Getters and setters are also called Accessor
