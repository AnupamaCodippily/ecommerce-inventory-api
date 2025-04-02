import IProduct from "./product.interface";

export default interface IProductService {
    getAllProducts(): Promise<IProduct[]>;

    createProduct(product: any): Promise<any>;

    updateProduct(id: number, updates: Partial<IProduct>): Promise<any>;

    deleteProduct(id: number): Promise<any>;

    getProductById(id: number): Promise<any>;

    searchProducts(query: string): Promise<any>;

    getProductsByFilter(filter: any): Promise<any>;
}