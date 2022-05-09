import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { IMagicWordHeader } from 'src/app-types/MagicWordHeader';
import { MagicWordHeaderDTO } from 'src/dto/magic-word-dto';
import { MagicWordEntity } from 'src/entities/magicWord/magicWord.entity';
import { MagicWordHeaderEntity } from 'src/entities/magicWord/magicWordHeader.entity';

@Injectable()
export class MagicWordService {
  constructor(
    @InjectRepository(MagicWordHeaderEntity)
    private readonly MagicWordHeaderRepository: EntityRepository<MagicWordHeaderEntity>,
    @InjectRepository(MagicWordEntity)
    private readonly MagicWordEntityRepository: EntityRepository<MagicWordEntity>,
  ) {}
  async createHeader(
    magicWordHeader: MagicWordHeaderDTO,
  ): Promise<string | IMagicWordHeader> {
    try {
      if (magicWordHeader.name != '') {
        const magicWordHeaderEntity =
          this.MagicWordHeaderRepository.create(magicWordHeader);
        await this.MagicWordHeaderRepository.persistAndFlush(
          magicWordHeaderEntity,
        );
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { words, createDate, ...result } = magicWordHeaderEntity;
        return result;
      }
      return 'Name cannot be empty';
    } catch (error) {
      return error;
    }
  }
  async deleteHeader(magicWordHeader: MagicWordHeaderDTO): Promise<boolean> {
    try {
      const magicWordHeaderEntity =
        await this.MagicWordHeaderRepository.findOne(magicWordHeader);
      await this.MagicWordHeaderRepository.removeAndFlush(
        magicWordHeaderEntity,
      );
      return true;
    } catch (error) {
      return false;
    }
  }
  async modifyHeader(magicWordHeader: MagicWordHeaderDTO): Promise<boolean> {
    try {
      const magicWordHeaderEntity =
        this.MagicWordHeaderRepository.create(magicWordHeader);
      this.MagicWordHeaderRepository.nativeUpdate(
        magicWordHeaderEntity.id,
        magicWordHeader,
      );
      return true;
    } catch (error) {
      return error;
    }
  }
  async getUserHeaders(id: number) {
    const userHeaders = await this.MagicWordHeaderRepository.find(
      {
        userId: id,
      },
      { fields: ['id', 'name', 'userId'] },
    );
    return userHeaders;
  }
}
