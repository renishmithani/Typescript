function _LOGGER(str: string) { //Factories Function
    console.log("LOGGER - FACTORIES");
    return function (_: Function) { //Decorator Function
        console.log(str);
    };
}

function _WithTemplate(template: string, hookId: string) {
    console.log("TEMPLATE - FACTORIES");
    return function (constructor: any) {
        let hookEl = document.getElementById(hookId);
        let p = new constructor(); //To access the properties of class
        console.log(p.name);
        if (hookEl) {
            // hookEl.innerHTML = template;
            hookEl.innerHTML = p.name;
        }
    };
}

@_LOGGER("Logger Decorator")
@_WithTemplate("<h1>First Decorator</h1>", "app")
class PERSONS {
    name: string = "PERSON - 1";
    constructor() {
        console.log("Constructor...");
    }
}
