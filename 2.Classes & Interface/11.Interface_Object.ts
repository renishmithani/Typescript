interface userType {
    name: string;
    age: number;
    address?: string; //Optional Properties using ? Marks
    greet(phrase: string): void;
}

let User: userType;

User = {
    name: "Renish",
    age: 22,
    greet(phrase: string) {
        console.log(phrase + " " + this.name);
    },
};

User.greet("Hii There I Am -");

//NOTE: 1.Interface is ude to define a structure of an Object
