import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './product.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserProduct } from 'src/sharedModels/UserProduct.model';

@Module({
  imports: [SequelizeModule.forFeature([Product, UserProduct])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
