import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
  Delete,
  Patch,
  Get,
} from '@nestjs/common';
import { MagicWordService } from './magic-word.service';
import { MagicWordDTO, MagicWordHeaderDTO } from '../../dto/magicWordDto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserIsUserGuard } from 'src/auth/guards/userIsUser.guard';

@Controller('magic-word')
export class MagicWordController {
  constructor(private magicWordService: MagicWordService) {}

  @UseGuards(JwtAuthGuard)
  @UseGuards(UserIsUserGuard)
  @Post('/header/create')
  async createHeader(@Body() body: MagicWordHeaderDTO) {
    return await this.magicWordService.createHeader(body);
  }
  @UseGuards(JwtAuthGuard)
  @Get('/header/get-user-headers')
  async getUserHeaders(@Request() req) {
    return await this.magicWordService.getUserHeaders(req.user.userId);
  }
  @UseGuards(JwtAuthGuard)
  @Post('/header/get-single-header')
  async getSingleHeader(@Body() body) {
    return await this.magicWordService.getSingleHeader(body.data.id);
  }
  @UseGuards(JwtAuthGuard)
  @UseGuards(UserIsUserGuard)
  @Delete('/header/delete')
  async deleteHeader(@Body() body: MagicWordHeaderDTO) {
    return await this.magicWordService.deleteHeader(body);
  }
  @UseGuards(JwtAuthGuard)
  @UseGuards(UserIsUserGuard)
  @Patch('/header/edit')
  async modifyHeader(@Body() body: MagicWordHeaderDTO) {
    return await this.magicWordService.modifyHeader(body);
  }
  @UseGuards(JwtAuthGuard)
  @UseGuards(UserIsUserGuard)
  @Post('/word/add')
  async add(@Body() body: MagicWordDTO) {
    return await this.magicWordService.addWord(body);
  }
  @UseGuards(JwtAuthGuard)
  @UseGuards(UserIsUserGuard)
  @Post('/word/modify')
  async modify(@Request() req: Request) {
    return true;
  }
  @UseGuards(JwtAuthGuard)
  @UseGuards(UserIsUserGuard)
  @Delete('/word/delete')
  async delete(@Body() body: MagicWordDTO) {
    return await this.magicWordService.deleteWord(body);
  }
}
