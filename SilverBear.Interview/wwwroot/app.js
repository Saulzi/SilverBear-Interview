define(['knockout'], function (knockout) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    /** Our actual implementation, here we are using the newer fetch API, many ways to skin cat and all */
    function productRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("products");
            return yield response.json();
        });
    }

    var template = "﻿<div class=\"container\"><div data-bind=\"hidden: products\" class=\"alert alert-primary\">Loading ...</div><h2>Add Product</h2><div class=\"row\" data-bind=\"using: currentItem\"><div class=\"form-group\"><label>Ram</label> <input class=\"form-control\" type=\"text\" data-bind=\"textInput: ram\"></div><div class=\"form-group\"><label>Storage</label> <input class=\"form-control\" type=\"text\" data-bind=\"textInput: storage\"></div><div class=\"form-group\"><label>Connectivity</label> <input class=\"form-control\" type=\"text\" data-bind=\"textInput: connectivity\"></div><div class=\"form-group\"><label>GPU</label> <input class=\"form-control\" type=\"text\" data-bind=\"textInput: gpu\"></div><div class=\"form-group\"><label>Weight</label> <input class=\"form-control\" type=\"text\" data-bind=\"textInput: weight\"></div><div class=\"form-group\"><label>PSU</label> <input class=\"form-control\" type=\"text\" data-bind=\"textInput: psu\"></div><div class=\"form-group\"><label>CPU</label> <input class=\"form-control\" type=\"text\" data-bind=\"textInput: cpu\"></div></div><button class=\"btn btn-primary\" data-bind=\"click: addCurrentItem\">Add</button><div data-bind=\"foreach: products\"><div data-bind=\"hidden: edit\"><div data-bind=\"text: ram\"></div><div data-bind=\"text: storage\"></div><div data-bind=\"text: connectivity\"></div><div data-bind=\"text: gpu\"></div><div data-bind=\"text: weight\"></div><div data-bind=\"text: psu\"></div><div data-bind=\"text: cpu\"></div></div><div data-bind=\"visible: edit\"><input class=\"form-control\" type=\"text\" data-bind=\"textInput: ram\"> <input class=\"form-control\" type=\"text\" data-bind=\"textInput: storage\"> <input class=\"form-control\" type=\"text\" data-bind=\"textInput: connectivity\"> <input class=\"form-control\" type=\"text\" data-bind=\"textInput: gpu\"> <input class=\"form-control\" type=\"text\" data-bind=\"textInput: weight\"> <input class=\"form-control\" type=\"text\" data-bind=\"textInput: psu\"> <input class=\"form-control\" type=\"text\" data-bind=\"textInput: cpu\"></div><button class=\"btn btn-primary\" data-bind=\"click: () => edit(!edit())\">Edit me!</button> <button class=\"btn btn-primary\" data-bind=\"click: () => $root.removeCurrentItem($index())\">Remove</button><hr></div></div>";

    class ProductList {
        constructor() {
            this.products = knockout.observableArray(); // Lets just render things for now
            // Current item being edited
            this.currentItem = {
                connectivity: [""],
                cpu: "",
                gpu: "",
                psu: "",
                ram: "",
                storage: "",
                weight: ""
            };
            // Use a lambda because this :P
            this.addCurrentItem = () => this.addProduct(this.currentItem); // Push copy of the current item
            // Remove product
            this.removeCurrentItem = (index) => this.products.splice(index, 1); // Remove the item at the specified index
            this.element = document.createElement("div");
            this.element.innerHTML = template;
            knockout.applyBindings(this, this.element);
            // Lets use old school promises a+ syntax here to do shit in the constructor, its pretty late and this thing doesn't even display anything yet
            productRepository().then(products => products.forEach(f => this.addProduct(f)));
        }
        addProduct(product) {
            this.products.push(Object.assign(Object.assign({}, product), { edit: knockout.observable(false) }));
        }
    }

    // Yummy Yummy yuck yuck
    let app = document.getElementById("app");
    app.appendChild(new ProductList().element);

});
//# sourceMappingURL=app.js.map
