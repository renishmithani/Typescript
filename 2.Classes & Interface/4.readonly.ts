class Read {
    name: string;
    age: number;
    readonly member: boolean;
    constructor(name: string, age: number, member: boolean) {
        this.name = name;
        this.age = age;
        this.member = member;
    }
    changeMember(value: boolean) {
        // this.member = value;            //We Cant change value of properties, because of it is readonly
        console.log(this.member);
    }
}

const people = new Read("Renish", 22, true);
people.changeMember(false);
// people.member = false                   //We Cant change value of properties, because of it is readonly
