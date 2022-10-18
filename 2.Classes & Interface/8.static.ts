class Products {
    name: string;
    static color: string = "White";

    constructor(name: string, color: string) {
        this.name = name;
    }
    static showName(num: number) {
        return { TotalProduct: num };
    }
}

console.log(Products.color); //We can access static properties withouts creating instance of class
console.log(Products.showName(10)); //We can access static method withouts creating instance of class
