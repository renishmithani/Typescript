let literalData: "a" | "b";     //Literal Type
literalData = "a";
console.log(literalData);

//------------------------------------------------------

function COMBINE(
    num1: number | string,
    num2: number | string,
    resultConversion: "as-string" | "as-number", //Literal Type
) {
    let result;
    if (
        (typeof num1 === "number" && typeof num2 === "number") ||
        resultConversion === "as-number"
    ) {
        result = +num1 + +num2;
    } else {
        result = num1.toString() + num2.toString();
    }
    return result;
}

const combineNumber = COMBINE(10, 20, "as-number");
const combineAsNumber = COMBINE("10", "20", "as-string");
const combineString = COMBINE("Renish", " Mithani", "as-string");

console.log(combineNumber);
console.log(combineAsNumber);
console.log(combineString);
