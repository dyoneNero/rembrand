import {Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import { AuthService } from './auth.service';
import {AuthDto} from "./dto/auth.dto";
import {Auth} from "./decorators/auth.decorator";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('register')
  async register (@Body() dto: AuthDto) {
    return this.authService.register(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('login')
  async login (@Body() dto: AuthDto) {
    return this.authService.login(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Get('access-route')
  async accessRoute () {
    return this.authService.accessRoute()
  }
}