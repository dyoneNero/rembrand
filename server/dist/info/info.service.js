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
exports.InfoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let InfoService = class InfoService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getOneInfo(id) {
        const info = await this.prismaService.info.findUnique({ where: { id } });
        return info;
    }
    async update(id, dto) {
        const info = this.prismaService.info.update({
            where: {
                id: id
            },
            data: dto
        });
        return info;
    }
    async create(dto) {
        const info = this.prismaService.info.create({
            data: dto
        });
        return info;
    }
};
InfoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InfoService);
exports.InfoService = InfoService;
//# sourceMappingURL=info.service.js.map