import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
  Unique,
} from '@mikro-orm/core';
import { MagicWordEntity } from './magicWord.entity';

@Entity()
export class MagicWordHeaderEntity {
  @PrimaryKey()
  @Unique()
  id: number;

  @Property()
  name: string;

  @Property()
  userId: number;

  @Property()
  createDate: Date = new Date();

  @OneToMany(() => MagicWordEntity, (word) => word.header)
  words = new Collection<MagicWordEntity>(this);
}
