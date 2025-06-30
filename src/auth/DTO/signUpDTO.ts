import { IsNotEmpty, IsString } from "class-validator";


export class signupDto {
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @IsString()
    password: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    phoneNumber: string;
}