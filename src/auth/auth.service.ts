import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AdminsService } from 'src/admins/admins.service';
@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => AdminsService))
    private adminService: AdminsService,
    private jwtService: JwtService,
  ) {}

  async validateUser(adminname: string, pass: string): Promise<any> {
    const user = await this.adminService.findOneByName(adminname);

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(admin: any) {
    const payload = { username: admin.name, sub: admin.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
