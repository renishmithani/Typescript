const Object1 = {
    name: "Renish",
    age: 22,
    hobbies: ["Sports", "Cooking"],
    role: [2, "Author"],
};
console.log(Object1);

//---------------------------------------------------

const Object2: {
    name: string;               //String Type
    age: number;                //Number Type
    hobbies: string[];          //Array Type
    role: [number, string, string];     //Tuple Type ( Fixed Length of array in tuple type )
} = {
    name: "Renish",
    age: 22,
    hobbies: ["Sports", "Cooking"],
    role: [2, "Author", "Name"],
};
console.log(Object2);
