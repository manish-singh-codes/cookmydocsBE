import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import apiResponse from 'src/response/api.response';
import errorResponse from 'src/response/error.response';

@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService ){}

    async create(userDto: any) {
        if(!userDto.email ){
            return errorResponse(400,"Email is required")
        }
        if(!userDto.password ){
             return errorResponse(400,"Password is required")
        }
        if(!userDto.name ){
              return errorResponse(400,"Name is required")
        }
        if(!userDto.phoneNumber ){
            return errorResponse(400,"Phone number is required")
        }
        const newUser =  await this.prisma.user.create({
            data: userDto
        })

        return apiResponse(201, "User created successfully",newUser);
    }
    
}