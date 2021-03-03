import { applyBindings, observableArray } from "knockout"
import { Product, productRepository } from "./Products"
import template from "./ProductList.html"

export class ProductList {
    products = observableArray<Product>();     // Lets just render things for now

    element: HTMLElement;

    // Current item being edited
    currentItem: Product = {
        connectivity: [""],
        cpu: "",
        gpu: "",
        psu: "",
        ram: "",
        storage: "",
        weight: ""
    };

    // Use a lambda because this :P
    addCurrentItem = () => {
        this.products.push({ ...this.currentItem });        // Push copy of the current item
    }

    constructor() {
        this.element = document.createElement("div");
        this.element.innerHTML = template

        applyBindings(this, this.element);

        // Lets use old school promises a+ syntax here to do shit in the constructor, its pretty late and this thing doesn't even display anything yet
        productRepository().then(products => this.products.push(...products));
    }
}