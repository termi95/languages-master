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
import { MagicWordHeaderDTO } from '../../dto/magic-word-dto';
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
  @Post('/word/add')
  async add(@Request() req: Request) {
    return true;
  }
  @UseGuards(JwtAuthGuard)
  @Post('/word/modify')
  async modify(@Request() req: Request) {
    return true;
  }
  @UseGuards(JwtAuthGuard)
  @Post('/word/delete')
  async delete(@Request() req: Request) {
    return true;
  }
}
