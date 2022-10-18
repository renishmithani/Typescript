"use strict";
function _merge(objA, objB, str) {
    return Object.assign(Object.assign({}, objA), objB); //Merge Two Objects
    // return Object.assign(objA, objB); //Merge Two Objects
}
const _results = _merge({ name: "Person" }, { age: 22 }, "Person");
console.log(_results);
function countDescription(element) {
    let descriptionText = "Got no value";
    if (element.length > 1) {
        descriptionText = "Got " + element.length + " element";
    }
    return [element, descriptionText];
}
console.log(countDescription("Hello World"));
