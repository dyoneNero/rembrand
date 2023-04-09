import {ArrayMinSize, IsString} from "class-validator";

export class InfoDto {

    @IsString()
    headerTel: string

    @IsString()
    mainTitle: string

    @IsString()
    mainSubtitle: string

    @IsString()
    aboutUsSlogan: string

    @IsString()
    contactLocation: string

    @IsString({each: true})
    @ArrayMinSize(1)
    contactTel: []

    @IsString()
    contactChart: string

    @IsString()
    contactVK: string

    @IsString()
    contactTg : string

    @IsString()
    contactWA: string

    @IsString()
    copyright: string
}