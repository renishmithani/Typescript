//First Way to make function in typescript
const arrowFunction = (str: string) => {
    console.log(str)
}

//Second Way of making function
const diff: (str: string) => void = str => {
    console.log(str)
}

//Third Way of making function
const diffff: (str: string | number) => {} = (str) => {
    return str;
};
console.log(diffff("Renish"));

//--------------- Function With Default Parameter ---------------------------------------

const getting = (num1: number, num2: number = 10): number =>  {
    return num1 + num2
}
const printFun = getting(10)
console.log(printFun)