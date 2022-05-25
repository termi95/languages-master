import {
  Entity,
  ManyToOne,
  PrimaryKey,
  Property,
  Unique,
} from '@mikro-orm/core';
import { MagicWordHeaderEntity } from './magicWordHeader.entity';

@Entity()
export class MagicWordEntity {
  @PrimaryKey()
  @Unique()
  id: number;

  @Property()
  word: string;

  @Property()
  tranWord: string;

  @Property()
  createDate: Date = new Date();

  @ManyToOne({
    entity: () => MagicWordHeaderEntity,
    onDelete: 'CASCADE',
  })
  header: MagicWordHeaderEntity;
}
