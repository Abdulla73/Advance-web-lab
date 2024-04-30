import {IsEmail, IsNotEmpty, IsString} from 'class-validator';
export class CreateProductDto  {
    @IsString()
    @IsNotEmpty()
    Product_name: string;

    @IsString()
    @IsNotEmpty()
    Product_category: string;

    @IsNotEmpty()
    Price:number

    @IsString()
    @IsNotEmpty()
    Quantity_aval: string;

    id:number

}