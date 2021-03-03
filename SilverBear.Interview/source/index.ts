import { ProductList } from "./ProductList"

// Yummy Yummy yuck yuck
let app = document.getElementById("app") as HTMLDivElement;
app.appendChild(new ProductList().element);