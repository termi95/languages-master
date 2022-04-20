import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
  Delete,
  Patch,
} from '@nestjs/common';
import { MagicWordService } from './magic-word.service';
import { MagicWordHeaderDTO } from '../../dto/magic-word-dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('magic-word')
export class MagicWordController {
  constructor(private magicWordService: MagicWordService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/word/add')
  async add(@Request() req: Request) {
    return true;
  }

  @UseGuards(JwtAuthGuard)
  @Post('/header/create')
  async createHeader(@Body() body: MagicWordHeaderDTO) {
    return await this.magicWordService.createHeader(body);
  }
  @UseGuards(JwtAuthGuard)
  @Delete('/header/delete')
  async deleteHeader(@Body() body: MagicWordHeaderDTO) {
    return await this.magicWordService.deleteHeader(body);
  }
  @UseGuards(JwtAuthGuard)
  @Patch('/header/modify')
  async modifyHeader(@Body() body: MagicWordHeaderDTO) {
    return await this.magicWordService.modifyHeader(body);
  }
  @UseGuards(JwtAuthGuard)
  @Post('/word/delete')
  async delete(@Request() req: Request) {
    return true;
  }
  @UseGuards(JwtAuthGuard)
  @Post('/word/modify')
  async modify(@Request() req: Request) {
    return true;
  }
}
