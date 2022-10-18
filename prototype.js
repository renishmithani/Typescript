let Model = function(model, price){
    //Instance Member
    this.model = model;
    this.price = price;
}

const samsung = new Model('Galaxy',1000,000)
const apple = new Model('Iphone 14 Pro Max')

//Prototype Member
Model.prototype.color = 'White'

console.log(samsung)