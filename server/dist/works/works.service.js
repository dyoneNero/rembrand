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
exports.WorksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let WorksService = class WorksService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllWorks() {
        const works = this.prisma.works.findMany();
        return works;
    }
    async getOneWork(id) {
        const work = await this.prisma.works.findUnique({ where: { id } });
        return work;
    }
    async addWork(dto) {
        const work = this.prisma.works.create({
            data: {
                name: dto.name,
                video: dto.video,
                image: [...dto.image],
                description: dto.description
            }
        });
        return work;
    }
    async deleteWork(id) {
        const work = await this.prisma.works.delete({
            where: {
                id
            }
        });
        return work;
    }
    async updateWork(id, dto) {
        const work = await this.prisma.works.update({
            where: {
                id
            },
            data: dto
        });
        return work;
    }
};
WorksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], WorksService);
exports.WorksService = WorksService;
//# sourceMappingURL=works.service.js.map