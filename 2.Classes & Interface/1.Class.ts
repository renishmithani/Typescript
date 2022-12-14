//------------------ Example --------------------

class Department {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const accounting = new Department("Accounting");

//------------------ Advance Example --------------------
class example {
    name: string;
    age: number;
    people: string[] = [];
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails(this: example) {
        return `Name: ${this.name}\nAge: ${this.age}`;
    }
    addPeople(people: string) {
        this.people.push(people);
    }
}

const ex1 = new example("Renish", 22);
ex1.addPeople("p1");
ex1.addPeople("p2");
ex1.addPeople("p3");
ex1.addPeople("p4");
console.log(ex1.people);
// console.log(ex1.getDetails())
// console.log(ex1.people)

// const obj = { name: 'Prince',age: '18',objEx: ex1.getDetails }
// console.log(obj.objEx())
