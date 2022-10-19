function _Logger(str: string) {
    //Decorator Factories Function
    //Decorator-Factories is used when pass parameter to the return function
    return function (target: Function) {
        //return Decorator function
        console.log("Logger...");
        console.log("Parameter Value", str);
        console.log(target);
    };
}

@_Logger("Hello")
class DecoratorClass {
    name: string = "Person";
    age: number = 10;
    constructor() {
        console.log("Constructor Is Running...");
    }
}
