import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';
import { Admin } from './admin.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [SequelizeModule.forFeature([Admin]), AuthModule],
  exports: [AdminsService],
  controllers: [AdminsController],
  providers: [AdminsService],
})
export class AdminsModule {}
