import { Logger } from '@nestjs/common';
import { Options } from '@mikro-orm/core';

const logger = new Logger('MikroORM');
const config: Options = {
  entities: ['./dist/entities'],
  entitiesTs: ['./src/entities'],
  dbName: process.env.DB_NAME,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: 5432,
  type: 'postgresql',
  logger: logger.log.bind(logger),
  debug: true,
};

export default config;
