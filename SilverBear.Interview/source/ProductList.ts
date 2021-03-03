import { applyBindings, observableArray, Observable, observable } from "knockout"
import { Product, productRepository } from "./Products"
import template from "./ProductList.html"

export class ProductList {
    products = observableArray<Product & { edit: Observable<boolean> }>();     // Lets just render things for now

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
    addCurrentItem = () => this.addProduct(this.currentItem);        // Push copy of the current item
    
    // Remove product
    removeCurrentItem = (index: number) => this.products.splice(index, 1);      // Remove the item at the specified index

    addProduct(product: Product) {
        this.products.push({
            ...product,
            edit: observable(false)
        })
    }
    

    constructor() {
        this.element = document.createElement("div");
        this.element.innerHTML = template

        applyBindings(this, this.element);

        // Lets use old school promises a+ syntax here to do shit in the constructor, its pretty late and this thing doesn't even display anything yet
        productRepository().then(products => products.forEach(f => this.addProduct(f)));
    }
}