import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {JwtService} from "@nestjs/jwt";
import {CreateRequestDto} from "./dto/create-request.dto";

@Injectable()
export class RequestService {

    constructor(private prisma: PrismaService) {}

    async getAll() {
        const request = this.prisma.request.findMany()

        return request
    }

    async addOne(dto: CreateRequestDto) {
        const request = this.prisma.request.create({
            data: dto
        })

        return request
    }

    async delete(id: number) {
        const request = this.prisma.request.delete({
            where: {
                id
            }
        })

        return request
    }
}