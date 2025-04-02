import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { StockModule } from './modules/stock/stock.module';
import { BusinessModule } from './modules/business/business.module';
import { ProductController } from './modules/products/product.controller';
import { DatabaseModule } from './core/database/database.module';

@Module({
  imports: [AuthModule, UsersModule, ProductsModule, StockModule, BusinessModule, DatabaseModule],
  controllers: [AppController, ProductController],
  providers: [AppService],
})
export class AppModule {}
