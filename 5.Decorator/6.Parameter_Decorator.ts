function _PropertyFun(target: any, propertyName: string | Symbol) {
    console.log("Property Decorator...");
    console.log(target);
    // console.log(propertyName)
}

function _AssesFun(
    target: any,
    name: string | Symbol,
    descriptor: PropertyDescriptor,
) {
    console.log("Accesser Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function ParamsFun(target: any, name: string, positive: number) {
    console.log("Parameter Decorator");
    console.log(target);
    console.log(name);
    console.log(positive);
}

class __Products {
    @PropertyFun
    title: string;
    private _price: number;

    @AssesFun
    set Price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw Error("Invalid Price - should be positive!");
        }
    }
    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(@ParamsFun tax: number) {
        return this._price * (1 + tax);
    }
}
