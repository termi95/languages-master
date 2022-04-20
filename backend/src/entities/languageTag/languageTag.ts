import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core';

@Entity()
export class LanguageTagEntity {
  @PrimaryKey()
  @Unique()
  id: number;

  @Property()
  @Unique()
  languageSubTag: string;

  @Property()
  @Unique()
  language: string;

  constructor(languageSubTag: string, language: string) {
    this.languageSubTag = languageSubTag;
    this.language = language;
  }
}
