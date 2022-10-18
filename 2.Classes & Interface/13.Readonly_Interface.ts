interface _User {
    readonly name: string;
    age: number;
}

let userInfo: _User;

userInfo = {
    name: "Person - 1",
    age: 22,
};

// userInfo.name = "Person - 2";       //We cant change the value of readonly propertie
