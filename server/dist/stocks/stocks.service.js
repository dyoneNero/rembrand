"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StocksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let StocksService = class StocksService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllStocks() {
        const stocks = await this.prisma.stocks.findMany();
        return stocks;
    }
    async getOneStock(id) {
        const stock = await this.prisma.stocks.findUnique({ where: { id } });
        return stock;
    }
    async addStock(dto) {
        const stock = await this.prisma.stocks.create({
            data: {
                name: dto.name,
                description: dto.description,
                image: dto.image
            }
        });
        return stock;
    }
    async deleteStock(id) {
        const stock = await this.prisma.stocks.delete({
            where: {
                id
            }
        });
        return stock;
    }
    async updateStock(id, dto) {
        const stock = await this.prisma.stocks.update({
            where: {
                id
            },
            data: dto
        });
        return stock;
    }
};
StocksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StocksService);
exports.StocksService = StocksService;
//# sourceMappingURL=stocks.service.js.map