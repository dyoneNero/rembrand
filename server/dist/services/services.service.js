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
exports.ServicesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ServicesService = class ServicesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllServices() {
        const services = await this.prisma.services.findMany();
        return services;
    }
    async getOneService(id) {
        const service = await this.prisma.services.findUnique({ where: { id } });
        return service;
    }
    async addService(dto) {
        const service = await this.prisma.services.create({
            data: {
                name: dto.name,
                description: dto.description,
                image: dto.image,
                price: dto.price
            }
        });
        return service;
    }
    async deleteService(id) {
        const service = await this.prisma.services.delete({
            where: {
                id
            }
        });
        return service;
    }
    async updateService(id, dto) {
        const service = await this.prisma.services.update({
            where: {
                id
            },
            data: dto
        });
        return service;
    }
};
ServicesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ServicesService);
exports.ServicesService = ServicesService;
//# sourceMappingURL=services.service.js.map