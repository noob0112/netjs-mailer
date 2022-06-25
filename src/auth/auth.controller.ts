import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(readonly authService: AuthService) {}

  @Post('/')
  signUp(@Body() user) {
    return this.authService.signUp(user);
  }
}
