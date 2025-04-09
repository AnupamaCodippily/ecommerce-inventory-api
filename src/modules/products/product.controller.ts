import IDatabaseErrorResponse from '@common/interfaces/database-error-response.interface';
import IProduct from '@common/interfaces/product.interface';
import { ProductService } from '@modules/products/product.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService) {
        this.productService = productService;
    }

    @Get()
    getAllProducts() {
        return this.productService.getAllProducts();
    }

    @Get(':id')
    findProductById(@Param('id') id: number) {
        return this.productService.getProductById(id);
    }

    @Post()
    createProduct(@Body() productData: IProduct): Promise<IProduct | IDatabaseErrorResponse> {
        return this.productService.createProduct(productData);
    }

    @Put(':id')
    updateProduct(@Param() id: number, @Body() productData: Partial<IProduct>) {
        // Logic to update an existing product
        return this.productService.updateProduct(id, productData);
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: number) {
        // Logic to delete a product
        return this.productService.deleteProduct(id);
    }

}
