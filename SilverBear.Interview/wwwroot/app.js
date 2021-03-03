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

    var template = "﻿<input><div data-bind=\"hidden: products\">Loading ...</div><div data-bind=\"using: currentItem\"><input type=\"text\" data-bind=\"textInput: ram\"> <input type=\"text\" data-bind=\"textInput: storage\"> <input type=\"text\" data-bind=\"textInput: connectivity\"> <input type=\"text\" data-bind=\"textInput: gpu\"> <input type=\"text\" data-bind=\"textInput: weight\"> <input type=\"text\" data-bind=\"textInput: psu\"> <input type=\"text\" data-bind=\"textInput: cpu\"></div><button data-bind=\"click: addCurrentItem\">Add</button><div data-bind=\"foreach: products\"><div data-bind=\"text: ram\"></div><div data-bind=\"text: storage\"></div><div data-bind=\"text: connectivity\"></div><div data-bind=\"text: gpu\"></div><div data-bind=\"text: weight\"></div><div data-bind=\"text: psu\"></div><div data-bind=\"text: cpu\"></div><button data-bind=\"click: () => $root.removeCurrentItem($index())\">Remove</button><hr></div>";

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
            this.addCurrentItem = () => this.products.push(Object.assign({}, this.currentItem)); // Push copy of the current item
            // Remove product
            this.removeCurrentItem = (index) => {
                this.products.splice(index, 1); // Remove the item at the specified index
            };
            this.element = document.createElement("div");
            this.element.innerHTML = template;
            knockout.applyBindings(this, this.element);
            // Lets use old school promises a+ syntax here to do shit in the constructor, its pretty late and this thing doesn't even display anything yet
            productRepository().then(products => this.products.push(...products));
        }
    }

    // Yummy Yummy yuck yuck
    let app = document.getElementById("app");
    app.appendChild(new ProductList().element);

});
//# sourceMappingURL=app.js.map
