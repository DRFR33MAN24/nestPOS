import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './admin.model';

// @Injectable()
// export class UsersService {
//   create(createUserDto: CreateUserDto) {
//     return 'This action adds a new user';
//   }

//   findAll() {
//     return `This action returns all users`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} user`;
//   }

//   update(id: number, updateUserDto: UpdateUserDto) {
//     return `This action updates a #${id} user`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} user`;
//   }
// }
@Injectable()
export class AdminsService {
  constructor(
    @InjectModel(Admin)
    private adminModel: typeof Admin,
  ) {}

  async create(createAdminDto): Promise<Admin> {
    return this.adminModel.create(createAdminDto);
  }
  async findAll(): Promise<Admin[]> {
    return this.adminModel.findAll();
  }

  findOne(id: string): Promise<Admin> {
    return this.adminModel.findOne({
      where: {
        id,
      },
    });
  }
  async findOneByName(name: string): Promise<Admin> {
    const admin = await this.adminModel.findOne({
      where: {
        name,
      },
      plain: true,
      raw: true,
    });

    return admin;
  }

  async update(id: string): Promise<void> {
    const admin = await this.findOne(id);
    await admin.destroy();
  }
  async remove(id: string): Promise<void> {
    const admin = await this.findOne(id);
    await admin.destroy();
  }
}
