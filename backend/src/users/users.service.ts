import { Injectable } from '@nestjs/common';
import * as bycrypt from 'bcrypt';
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async create(userData: any): Promise<any> {
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(userData.password, salt);
    const userId = Date.now();
    this.users.push({
      userId: userId,
      username: userData.username,
      password: hashedPassword,
    });
    return true;
  }
}
