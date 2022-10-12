function callback(num1: number, num2: number, cb: (num: number) => void) {
    const result = num1 + num2;
    cb(result);
}

callback(10, 20, (result) => {
    console.log(result);
});

// -----------------------------------------------

function getCalBacks(num1: number,num2: number,printCB: (label: string, result: number) => void) {
    let result = num1 + num2
    printCB("Result", result);
}

function printResults(label: string, result: number) {
    console.log(label, result);
}

getCalBacks(10, 20, printResults);

