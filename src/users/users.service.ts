import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.model';

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
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(createUserDto): Promise<User> {
    return this.userModel.create(createUserDto);
  }
  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }
  findOneByName(name: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        name,
      },
      plain: true,
      raw: true,
    });
  }

  async update(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
