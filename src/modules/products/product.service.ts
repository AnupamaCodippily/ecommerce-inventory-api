import { IProductRepository } from "@core/database/interfaces/product.repository.interface";
import IProduct from "@common/interfaces/product.interface";
import { Inject, Injectable } from "@nestjs/common";
import IProductService from "@common/interfaces/product.service.interface";

@Injectable()
export class ProductService implements IProductService{

    constructor(@Inject('IProductRepository') private readonly productRepository: IProductRepository) {} 

    getAllProducts() {
        return this.productRepository.findAll();
    }
    
    // Example method to create a new product
    createProduct(productData: Partial<IProduct>) {
        return this.productRepository.create(productData);
    }

    updateProduct(productId: number, productData: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    deleteProduct(productId: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getProductById(productId: number): Promise<any> {
        return this.productRepository.findById(productId);
    }
    
    searchProducts(query: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getProductsByFilter(filter: any): Promise<any> {
        throw new Error("Method not implemented.");
    }

}