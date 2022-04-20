import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bycrypt from 'bcrypt';
import { LoginUserDTO } from 'src/dto/user-dto';
import { EntityRepository } from '@mikro-orm/core';
import { UserEntity } from 'src/entities/user/user.entity';
import { InjectRepository } from '@mikro-orm/nestjs';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly UserRepository: EntityRepository<UserEntity>,
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.UserRepository.findOne({ username });
    console.log(user, pass);
    if (user && (await bycrypt.compare(pass, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login({ username, id }: LoginUserDTO): Promise<any> {
    const payload = { username: username, sub: id };
    return {
      access_token: this.jwtService.sign(payload),
      userId: id,
    };
  }

  async register(userData: any): Promise<any> {
    return await this.usersService.create(userData);
  }
}
