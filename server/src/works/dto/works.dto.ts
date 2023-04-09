import {ArrayMinSize, IsOptional, IsString} from "class-validator";


export class WorksDto {

    @IsString()
    name: string

    @IsOptional()
    @IsString()
    video: string

    @IsString({each: true})
    @ArrayMinSize(1)
    image: []

    @IsString()
    description: string
}