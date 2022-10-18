"use strict";
function _add(n1, n2) {
    if (typeof n1 === "string" || typeof n2 === "string") {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
console.log(_add(10, 20));
console.log(_add("Hello ", "world"));
