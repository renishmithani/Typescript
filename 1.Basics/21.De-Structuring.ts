//Array Destructuring ------------------------------------
let arrDes = ["Sports", "Reading", "Cooking"];
let [hobbies1, hobbies2] = arrDes;
console.log(hobbies1);

//Object Destructuring ------------------------------------
let OBJ = {
    firstName: "Renish",
    personAge: 22,
};

const { firstName: first_name, personAge } = OBJ;
console.log(first_name);
