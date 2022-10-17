let array = ["Sports", "Books", "Cooking"];
let newArray = ["Codding", "Swimming"];
newArray.push(...array);
console.log(newArray);
//------------------------------------------------
const addition = (...number: number[]): number => {
    return number.reduce((Accumulator, Value) => {
        return Accumulator + Value;
    });
};
let result = addition(100, 100, 100, 100);
console.log(result);
