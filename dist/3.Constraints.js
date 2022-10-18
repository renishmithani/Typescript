"use strict";
function _mergeObjects(objA, objB, str) {
    //Using extend keyword guarantee the type is Object or ....
    return Object.assign(Object.assign({}, objA), objB); //Merge Two Objects
    // return Object.assign(objA, objB); //Merge Two Objects
}
const _result = _mergeObjects({ name: "Person" }, { age: 22 }, "Person");
console.log(_result);
