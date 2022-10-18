function _merge<T, S>(objA: T, objB: T, str: S): T {
    return { ...objA, ...objB }; //Merge Two Objects
    // return Object.assign(objA, objB); //Merge Two Objects
}

const _results = _merge({ name: "Person" }, { age: 22 }, "Person");
console.log(_results);

//----------Another Generic Function------------------

interface Lnegthy {
    length: number; 
}

function countDescription<T extends Lnegthy>(element: T): [T, string] {
    let descriptionText = "Got no value";
    if (element.length > 1) {
        descriptionText = "Got " + element.length + " element";
    }
    return [element, descriptionText];
}

console.log(countDescription("Hello World"));

