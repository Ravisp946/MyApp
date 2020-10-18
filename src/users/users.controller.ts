import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { SearchUserDto } from './dto/SearchUserDto';
import { SignUpDto } from './dto/SignUpDto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly userService : UsersService){}

    @Post()
    async signup(@Body() body: SignUpDto){
        return this.userService.signup(body);
    }

    @Get('getUser')
    async getUser(@Query() params: SearchUserDto){
        return this.userService.getUser(params);
    }
}
