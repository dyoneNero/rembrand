import { WorksService } from './works.service';
import { WorksDto } from "./dto/works.dto";
export declare class WorksController {
    private readonly worksService;
    constructor(worksService: WorksService);
    getAllWorks(): Promise<import(".prisma/client").Works[]>;
    getOneWork(id: string): Promise<import(".prisma/client").Works>;
    addWork(dto: WorksDto): Promise<import(".prisma/client").Works>;
    deleteWork(id: string): Promise<import(".prisma/client").Works>;
    updateWork(id: string, dto: WorksDto): Promise<import(".prisma/client").Works>;
}
