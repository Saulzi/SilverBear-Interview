export type Product = {
    ram: string;
    storage: string;
    connectivity: string[];
    gpu: string;
    weight: string;
    psu: string;
    cpu: string;
}

/**
 * Represents our products, we are going to pull these in with a ajax style cal
 **/
export type ProductRepository = () => PromiseLike<Product[]>;

/** Our actual implementation, here we are using the newer fetch API, many ways to skin cat and all */
export async function productRepository() {
    const response = await fetch("products");
    return await response.json() as Product[];
}