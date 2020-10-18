import { Body, Controller, Post } from '@nestjs/common';
import { SignUpDto } from './dto/SignUpDto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly userService : UsersService){}

    @Post()
    async signup(@Body() body: SignUpDto){
        return this.userService.signup(body);
    }
}
