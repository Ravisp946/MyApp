import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SignUpDto } from './dto/SignUpDto';
import { UserEntity } from './entities/users.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}

    async signup(dto: SignUpDto){
        const { username, password, email } = dto;
        const existingUser = await this.userRepository.findOne({ email });
        if(existingUser){
            throw new BadRequestException(`Email Already Exists`);
        }
        await this.userRepository.insert(dto);
        return {
            status : 'ok'
        };
    }
}
