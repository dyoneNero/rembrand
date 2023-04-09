import { PrismaService } from "../prisma.service";
import { CreateRequestDto } from "./dto/create-request.dto";
export declare class RequestService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<import(".prisma/client").Request[]>;
    addOne(dto: CreateRequestDto): Promise<import(".prisma/client").Request>;
    delete(id: number): Promise<import(".prisma/client").Request>;
}
