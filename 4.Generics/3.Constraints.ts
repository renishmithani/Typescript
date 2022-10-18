function _mergeObjects<T extends object, S extends string>(objA: T, objB: T, str: S): T {
    //Using extend keyword guarantee the type is Object or ....
    return { ...objA, ...objB }; //Merge Two Objects
    // return Object.assign(objA, objB); //Merge Two Objects
}

const _result = _mergeObjects({ name: "Person" }, { age: 22 }, "Person");
console.log(_result);
