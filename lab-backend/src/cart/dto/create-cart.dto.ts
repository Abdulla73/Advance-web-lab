import {IsEmail, IsNotEmpty, IsString} from 'class-validator';
export class CreateCartDto {
    @IsString()
    @IsNotEmpty()
    Product_name: string;

    @IsNotEmpty()
    Price:number

    @IsString()
    @IsNotEmpty()
    Quantity_buyed: string;

    id:number

}