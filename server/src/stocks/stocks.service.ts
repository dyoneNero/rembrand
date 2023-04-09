import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {StocksDto} from "./dto/stocks.dto";

@Injectable()
export class StocksService {

    constructor(private prisma: PrismaService) {}

    async getAllStocks() {
        const stocks = await this.prisma.stocks.findMany()

        return stocks
    }

    async getOneStock(id: number) {
        const stock = await this.prisma.stocks.findUnique({where: {id}})
        return stock
    }

    async addStock(dto: StocksDto) {
        const stock = await this.prisma.stocks.create({
            data: {
                name: dto.name,
                description: dto.description,
                image: dto.image
            }
        })

        return stock
    }

    async deleteStock(id: number) {
        const stock = await this.prisma.stocks.delete({
            where: {
                id
            }
        })

        return stock
    }

    async updateStock(id: number, dto: StocksDto) {
        const stock = await this.prisma.stocks.update({
            where: {
                id
            },
            data: dto
        })

        return stock
    }
}
