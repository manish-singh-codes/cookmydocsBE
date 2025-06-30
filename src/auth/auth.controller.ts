import { Body, Controller, Post } from '@nestjs/common';
import { signupDto } from './DTO/signUpDTO'; // Adjust the import path as necessary
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    // This controller will handle authentication-related routes
    // You can add methods here to handle login, registration, etc.
    // For example:
    // @Post('login')
    // async login(@Body() loginDto: LoginDto) {
    //   return this.authService.login(loginDto);
    // }

    constructor( private authService : AuthService ){}

    @Post('register')
    async register( @Body() userDto: signupDto  ) {
        
    }
}
