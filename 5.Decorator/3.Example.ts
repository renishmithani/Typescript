function WithTemplate(template: string, hookId: string) {
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

@WithTemplate("<h1>First Decorator</h1>", "app")
class PERSON {
    name: string = "PERSON - 1";
    constructor() {
        console.log("Constructor...");
    }
}
