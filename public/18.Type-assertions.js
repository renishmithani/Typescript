"use strict";
let someValue = "How are you";
let strLength = someValue.length;
console.log(strLength);
let nothing = 50;
let getNothing = nothing.toString();
console.log(getNothing);
//NOTE: 1.When we want to change a variable from one type to another such as any to number etc, we use Type assertion
//NOTE: 2.In Typescript, Type assertion is a technique that informs the compiler about the type of a variable.
//NOTE: 3.Type assertion is similar to typecasting but it doesn’t reconstruct code.
//NOTE: 4.You can use type assertion to specify a value’s type and tell the compiler not to deduce it.
