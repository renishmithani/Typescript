interface Name {
    readonly name: string;
    age?: number;           //Optional Properties By Passing ? mark 
}

interface Greetable extends Name{
    greet(phrase: string): void;
}

class Both implements Greetable {
    name: string;
    constructor(name:string){
        this.name = name;
    }
    greet(phrase:string){
        console.log(phrase + this.name)
    }
}

