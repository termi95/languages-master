import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { BadRequestException, Injectable } from '@nestjs/common';
import * as bycrypt from 'bcrypt';
import { CreateUsersDTO } from 'src/dto/create-users-dto';
import { UserEntity } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly UserRepository: EntityRepository<UserEntity>,
  ) {}

  async create({
    username,
    email,
    password,
  }: CreateUsersDTO): Promise<boolean> {
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);
    try {
      await this.UserRepository.persistAndFlush(
        new UserEntity(username, email, hashedPassword),
      );
      return true;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
