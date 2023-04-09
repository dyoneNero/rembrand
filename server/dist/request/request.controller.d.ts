import { RequestService } from './request.service';
import { CreateRequestDto } from "./dto/create-request.dto";
export declare class RequestController {
    private readonly requestService;
    constructor(requestService: RequestService);
    getAll(): Promise<import(".prisma/client").Request[]>;
    addOne(dto: CreateRequestDto): Promise<import(".prisma/client").Request>;
    delete(id: string | number): Promise<import(".prisma/client").Request>;
}
