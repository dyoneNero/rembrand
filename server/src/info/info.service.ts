import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import { InfoDto } from './dto/info.dto';

@Injectable()
export class InfoService {

    constructor(private readonly prismaService: PrismaService) {}

    async getOneInfo(id: number) {
        const info = await this.prismaService.info.findUnique({where: {id}})
        return info
    }

    async update(id: number, dto: InfoDto) {
        const info = this.prismaService.info.update({
            where: {
                id: id
            },
            data: dto
        })

        return info
    }

    async create(dto: InfoDto) {
        const info = this.prismaService.info.create({
            data: dto
        })

        return info
    }
}
