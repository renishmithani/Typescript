"use strict";
//----------------this keyword-----------------------------------
class Product {
    constructor(pName, pID) {
        this.pName = pName;
        this.pID = pID;
    }
    getProduct() {
        console.log(`Product Name is ${this.pName}\nProduct ID is ${this.pID}`);
    }
}
const products = new Product("Iphone", 1);
products.getProduct();
const copyProduct = {
    pName: "Samsung",
    pID: 20,
    ProductDetail: products.getProduct,
};
copyProduct.ProductDetail();
