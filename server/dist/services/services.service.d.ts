import { ServicesDto } from "./dto/services.dto";
import { PrismaService } from "../prisma.service";
export declare class ServicesService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllServices(): Promise<import(".prisma/client").Services[]>;
    getOneService(id: number): Promise<import(".prisma/client").Services>;
    addService(dto: ServicesDto): Promise<import(".prisma/client").Services>;
    deleteService(id: number): Promise<import(".prisma/client").Services>;
    updateService(id: number, dto: ServicesDto): Promise<import(".prisma/client").Services>;
}
