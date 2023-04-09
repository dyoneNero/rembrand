import {IsString} from "class-validator";

export class StocksDto {

    @IsString()
    name: string

    @IsString()
    description: string

    @IsString()
    image: string
}