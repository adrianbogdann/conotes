import { Controller, Post, Body, Get, Headers } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './entities/auth.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() user: User): Promise<User> {
    return this.authService.register(user);
  }

  @Post('login')
  async login(
    @Body() credentials: { username: string; password: string },
  ): Promise<string> {
    const { username, password } = credentials;
    return this.authService.login(username, password);
  }

  @Get('validate')
  async validate(@Headers('authorization') token: string): Promise<User> {
    return this.authService.validateUser(token);
  }
}
