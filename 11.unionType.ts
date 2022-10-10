function combine(input1: number | string, input2: number | string) {
    // Union types are used when a value can be more than a single type.
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combineNumber = combine(30, 20);
const combineString = combine("Renish", " Mithani");

console.log(combineNumber);
console.log(combineString);
