"use strict";
function extractAndDescribe(obj, key) {
    //keyof it meanse that parameter in guaranteed the key of object
    return obj[key];
}
console.log(extractAndDescribe({ name: "Persons" }, "name"));
