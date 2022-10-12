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
console.log(difff("Renish"));