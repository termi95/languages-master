import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: [
        'http://localhost:3000',
        'http://localhost',
        'https://localhost',
      ],
      credentials: true,
    },
  });
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT);
}
bootstrap();
