import { ServicesService } from './services.service';
import { ServicesDto } from "./dto/services.dto";
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    getAllServices(): Promise<import(".prisma/client").Services[]>;
    getOneService(id: string): Promise<import(".prisma/client").Services>;
    addService(dto: ServicesDto): Promise<import(".prisma/client").Services>;
    deleteService(id: string): Promise<import(".prisma/client").Services>;
    updateService(id: string, dto: ServicesDto): Promise<import(".prisma/client").Services>;
}
