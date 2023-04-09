import { Injectable } from '@nestjs/common';
import {ServicesDto} from "./dto/services.dto";
import {PrismaService} from "../prisma.service";

@Injectable()
export class ServicesService {

    constructor(private prisma: PrismaService) {}

    async getAllServices() {
        const services = await this.prisma.services.findMany()

        return services
    }

    async getOneService(id: number) {
        const service = await this.prisma.services.findUnique({where: {id}})
        return service
    }

    async addService(dto: ServicesDto) {
        const service = await this.prisma.services.create({
            data: {
                name: dto.name,
                description: dto.description,
                image: dto.image,
                price: dto.price
            }
        })

        return service
    }

    async deleteService(id: number) {
        const service = await this.prisma.services.delete({
            where: {
                id
            }
        })

        return service
    }

    async updateService(id: number, dto: ServicesDto) {
        const service = await this.prisma.services.update({
            where: {
                id
            },
            data: dto
        })

        return service
    }
}
