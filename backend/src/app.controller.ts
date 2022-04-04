import {
  Controller,
  Request,
  Get,
  Post,
  UseGuards,
  HttpCode,
  Body,
} from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { CreateUsersDTO, LoginUserDtoReq } from './dto/create-users-dto';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @HttpCode(200)
  async login(@Request() req: Request & LoginUserDtoReq) {
    return this.authService.login(req.user);
  }

  @Post('auth/register')
  async register(@Body() dto: CreateUsersDTO) {
    return this.authService.register(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
