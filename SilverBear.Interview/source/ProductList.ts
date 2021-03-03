import { observable, applyBindings } from "knockout"
import { Product, productRepository } from "./Products"
import template from "./ProductList.html"

export class ProductList {
    products = observable<Product[]>();     // Lets just render things for now
    element: HTMLElement;

    constructor() {
        this.element = document.createElement("div");
        this.element.innerHTML = template

        applyBindings(this, this.element);

        // Lets use old school promises a+ syntax here to do shit in the constructor, its pretty late and this thing doesn't even display anything yet
        productRepository().then(products => {
            debugger;
            this.products(products)
        });
    }
}