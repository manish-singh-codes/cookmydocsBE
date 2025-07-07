import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService ){}

    create(userDto: any) {
        return this.prisma.user.findMany()
    }
}