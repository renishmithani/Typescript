function Log(target: any, propertyName: string | Symbol) {
    console.log('Property Decorator...')
    console.log(target);
    // console.log(propertyName)
}

class _Product {
    @Log
    title: string;
    private _price: number;

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
