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

  @ManyToOne(() => MagicWordHeaderEntity)
  header: MagicWordHeaderEntity;

  constructor(word: string, tranWord: string) {
    this.word = word;
    this.tranWord = tranWord;
  }
}
