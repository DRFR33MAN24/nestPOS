import { Module, forwardRef } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';
import { Admin } from './admin.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    SequelizeModule.forFeature([Admin]),
    forwardRef(() => AuthModule),
    MulterModule.register({
      dest: './files',
    }),
  ],
  exports: [AdminsService],
  controllers: [AdminsController],
  providers: [AdminsService],
})
export class AdminsModule {}
