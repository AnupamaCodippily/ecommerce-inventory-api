import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import  Product from '@core/database/impl/entities/product.entity';
import { IProductRepository } from '@core/database/interfaces/product.repository.interface';
import IDatabaseErrorResponse from '@common/interfaces/database-error-response.interface';

@Injectable()
export class ProductRepository implements IProductRepository {
    constructor(
        @InjectRepository(Product)
        private readonly repo: Repository<Product>,
    ) { }

    async update(id: string, updates: Partial<Product>): Promise<Product> {
        throw new Error('Method not implemented.');
    }

    async delete(id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }

    async findAll(): Promise<Product[]> {
        return this.repo.find();
    }

    async create(product: Product): Promise<Product | IDatabaseErrorResponse> {
        try {
            const newProduct = this.repo.create(product);
            return await this.repo.save(newProduct);
        } catch (error: Error | any) {
            let errorMessage = error.message;
            
            if (errorMessage) {

                console.debug('Error creating product:', error);
            } else {
                errorMessage = 'Unknown error';
            }
            
            console.error('Error creating product:', errorMessage);
            
            return {
                error: true,
                message: errorMessage,
                statusCode: 500
            }
        }
    }

    async findById(id: number): Promise<Product | null> {
        return this.repo.findOne({ where: { id } });
    }
}
