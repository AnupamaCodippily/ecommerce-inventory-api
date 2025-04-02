import IProduct from '@common/interfaces/product.interface';
import { ProductService } from '@modules/products/product.service';
import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService) {
        this.productService = productService;
    }

    @Get()
    getAllProducts() {
        return this.productService.getAllProducts();
    }

    @Post()
    createProduct( @Body() productData: Partial<IProduct>) {
        this.productService.createProduct(productData);
    }

    @Put(':id')
    updateProduct() {
        // Logic to update an existing product
    }

    @Delete(':id')
    deleteProduct() {
        // Logic to delete a product
    }

}
