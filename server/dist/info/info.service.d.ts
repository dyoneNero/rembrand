import { PrismaService } from "../prisma.service";
import { InfoDto } from './dto/info.dto';
export declare class InfoService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getOneInfo(id: number): Promise<import(".prisma/client").Info>;
    update(id: number, dto: InfoDto): Promise<import(".prisma/client").Info>;
}
