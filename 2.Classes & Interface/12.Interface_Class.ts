interface Greetable {
    name: string;
    greet(phrase: string): void;
}

class Persons implements Greetable {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet(phrase: string): void {
        console.log(phrase + this.name);
    }
}

let Users: Greetable;

Users = new Persons('Renish');

Users.greet("Hii There I Am -");
console.log(Users)

//NOTE: 1.Interface is ude to define a structure of an Object
