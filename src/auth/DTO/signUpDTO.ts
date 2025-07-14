import { IsNotEmpty, IsString } from "class-validator";


export class signupDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    password: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    phoneNumber: string;
}