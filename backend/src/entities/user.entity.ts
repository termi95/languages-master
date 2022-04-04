import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core';

@Entity()
export class UserEntity {
  @PrimaryKey()
  id: number;

  @Property()
  @Unique()
  username: string;

  @Property()
  @Unique()
  email: string;

  @Property()
  password: string;

  constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
