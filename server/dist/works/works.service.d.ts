import { PrismaService } from "../prisma.service";
import { WorksDto } from "./dto/works.dto";
export declare class WorksService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllWorks(): Promise<import(".prisma/client").Works[]>;
    getOneWork(id: number): Promise<import(".prisma/client").Works>;
    addWork(dto: WorksDto): Promise<import(".prisma/client").Works>;
    deleteWork(id: number): Promise<import(".prisma/client").Works>;
    updateWork(id: number, dto: WorksDto): Promise<import(".prisma/client").Works>;
}
