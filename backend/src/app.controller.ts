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
import { UsersService } from './users/users.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { CreateUsersDTO, LoginUserDtoReq } from './dto/create-users-dto';

@Controller('auth')
export class AppController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  @HttpCode(200)
  async login(@Request() req: Request & LoginUserDtoReq) {
    return this.authService.login(req.user);
  }

  @Post('/register')
  async register(@Body() dto: CreateUsersDTO) {
    return this.authService.register(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  getProfile(@Request() req) {
    console.log(req.user);
    return this.userService.getUserProfile(req.user);
  }
}
