import { DatabaseModule } from '@core/database/database.module';
import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
@Module({
    imports: [ 
        DatabaseModule
    ],
    controllers: [ProductController],
    providers: [ProductService],
    exports: [ProductService],
})
export class ProductsModule { }
