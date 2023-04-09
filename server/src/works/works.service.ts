import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {WorksDto} from "./dto/works.dto";

@Injectable()
export class WorksService {

    constructor(private prisma: PrismaService) {}

    async getAllWorks() {
        const works = this.prisma.works.findMany()

        return works
    }

    async getOneWork(id: number) {
        const work = await this.prisma.works.findUnique({where: {id}})
        return work
    }

    async addWork(dto: WorksDto) {
        const work = this.prisma.works.create({
            data: {
                name: dto.name,
                video: dto.video,
                image: [...dto.image],
                description: dto.description
            }
        })

        return work
    }

    async deleteWork(id: number) {
        const work = await this.prisma.works.delete({
            where: {
                id
            }
        })

        return work
    }

    async updateWork(id: number, dto: WorksDto) {
        const work = await this.prisma.works.update({
            where: {
                id
            },
            data: dto
        })

        return work
    }
}
