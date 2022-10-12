import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserProduct } from 'src/sharedModels/UserProduct.model';
import { Payment } from 'src/payments/payment.model';

@Module({
  imports: [SequelizeModule.forFeature([User, UserProduct])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
