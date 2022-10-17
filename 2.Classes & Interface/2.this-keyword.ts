//----------------this keyword-----------------------------------

class Product {
    pName: string;
    pID: number;
    constructor(pName: string, pID: number) {
        this.pName = pName;
        this.pID = pID;
    }
    getProduct(this: Product): void {
        console.log(`Product Name is ${this.pName}\nProduct ID is ${this.pID}`);
    }
}

const products = new Product("Iphone", 1);
products.getProduct();

type ProductObject = { pName: string; pID: number; ProductDetail: Function };
const copyProduct: ProductObject = {
    pName: "Samsung",
    pID: 20,
    ProductDetail: products.getProduct,
};
copyProduct.ProductDetail();

