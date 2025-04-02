import { IProductRepository } from "@core/database/interfaces/product.repository.interface";
import IProduct from "@common/interfaces/product.interface";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class ProductService {
    constructor(@Inject('IProductRepository') private readonly productRepository: IProductRepository) {} 

    getAllProducts() {
        return this.productRepository.findAll();
    }

    // Example method to create a new product
    createProduct(productData: Partial<IProduct>) {
        return this.productRepository.create(productData);
    }

    // Example method to update an existing product
    updateProduct(productId: string, productData: any) {
        // Logic to update an existing product
        return {};
    }

    // Example method to delete a product
    deleteProduct(productId: string) {
        // Logic to delete a product
        return {};
    }
}