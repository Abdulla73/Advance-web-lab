import {IsEmail, IsNotEmpty, IsString} from 'class-validator';
export class CreateRegistrationDto {
    @IsString()
    @IsNotEmpty()
    Name: string;

    @IsEmail()
    @IsNotEmpty()
    Email: string;

    @IsString()
    @IsNotEmpty()
    Password: string

    id:number

}
