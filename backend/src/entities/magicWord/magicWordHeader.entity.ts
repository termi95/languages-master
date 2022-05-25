import {
  Cascade,
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
  @OneToMany({
    entity: () => MagicWordEntity,
    mappedBy: (word) => word.header,
    cascade: [Cascade.REMOVE],
  })
  words = new Collection<MagicWordEntity>(this);
}
