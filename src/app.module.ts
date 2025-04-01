import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { StockModule } from './modules/stock/stock.module';
import { BusinessModule } from './modules/business/business.module';

@Module({
  imports: [AuthModule, UsersModule, ProductsModule, StockModule, BusinessModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
