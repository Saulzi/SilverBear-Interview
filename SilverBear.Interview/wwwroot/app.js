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

    var template = "﻿<div><div data-bind=\"hidden: products\">Loading ...</div><div data-bind=\"foreach: products\"><div data-bind=\"text: ram\"></div><div data-bind=\"text: storage\"></div><div data-bind=\"text: connectivity\"></div><div data-bind=\"text: gpu\"></div><div data-bind=\"text: weight\"></div><div data-bind=\"text: psu\"></div><div data-bind=\"text: cpu\"></div><hr></div></div>";

    class ProductList {
        constructor() {
            this.products = knockout.observable(); // Lets just render things for now
            this.element = document.createElement("div");
            this.element.innerHTML = template;
            knockout.applyBindings(this, this.element);
            // Lets use old school promises a+ syntax here to do shit in the constructor, its pretty late and this thing doesn't even display anything yet
            productRepository().then(products => {
                debugger;
                this.products(products);
            });
        }
    }

    // Yummy Yummy yuck yuck
    let app = document.getElementById("app");
    app.appendChild(new ProductList().element);

});
//# sourceMappingURL=app.js.map
