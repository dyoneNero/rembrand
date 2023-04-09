import {IsString} from "class-validator";

export class ServicesDto {

    @IsString()
    name: string

    @IsString()
    description: string

    @IsString()
    image: string

    @IsString()
    price: string
}