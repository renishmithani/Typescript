"use strict";
function callback(num1, num2, cb) {
    const result = num1 + num2;
    cb(result);
}
callback(10, 20, (result) => {
    console.log(result);
});
// -----------------------------------------------
function getCalBacks(num1, num2, printCB) {
    let result = num1 + num2;
    printCB("Result", result);
}
function printResults(label, result) {
    console.log(label, result);
}
getCalBacks(10, 20, printResults);
