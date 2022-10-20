"use strict";
/// <reference path="./InterfaceNamespace.ts"/>
var objNamespace;
(function (objNamespace) {
    const OBJ = {
        name: "Person1",
        age: 30,
        address: "Anonymous",
    };
    console.log(OBJ);
})(objNamespace || (objNamespace = {}));
