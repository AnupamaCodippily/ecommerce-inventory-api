import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './impl/repositories/product.repository';
import Product from './impl/entities/product.entity';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'inventory_db_dev',
        entities: [Product],
        synchronize: true,  // Set to true for development only
      }), TypeOrmModule.forFeature([Product])]
      ,
    providers: [ProductRepository],
    exports: [ProductRepository],
})
export class DatabaseModule {}
