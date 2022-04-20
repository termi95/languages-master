import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { MagicWordEntity } from 'src/entities/magicWord/magicWord.entity';
import { MagicWordHeaderEntity } from 'src/entities/magicWord/magicWordHeader.entity';
import { MagicWordService } from './magic-word.service';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [MagicWordHeaderEntity, MagicWordEntity],
    }),
  ],
  providers: [MagicWordService],
  exports: [MagicWordService],
})
export class MagicWordModule {}
