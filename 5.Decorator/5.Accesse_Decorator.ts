function PropertyFun(target: any, propertyName: string | Symbol) {
    console.log('Property Decorator...')
    console.log(target);
    // console.log(propertyName)
}

function AssesFun(
    target: any,
    name: string | Symbol,
    descriptor: PropertyDescriptor,
) {
    console.log('Accesser Decorator...')
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

class _Products {
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
    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
}
