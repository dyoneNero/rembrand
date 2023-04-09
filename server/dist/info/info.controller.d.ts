import { InfoService } from './info.service';
import { InfoDto } from './dto/info.dto';
export declare class InfoController {
    private readonly infoService;
    constructor(infoService: InfoService);
    getOneInfo(id: string): Promise<import(".prisma/client").Info>;
    update(id: string, dto: InfoDto): Promise<import(".prisma/client").Info>;
}
