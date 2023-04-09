import { PrismaService } from "../prisma.service";
import { StocksDto } from "./dto/stocks.dto";
export declare class StocksService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllStocks(): Promise<import(".prisma/client").Stocks[]>;
    getOneStock(id: number): Promise<import(".prisma/client").Stocks>;
    addStock(dto: StocksDto): Promise<import(".prisma/client").Stocks>;
    deleteStock(id: number): Promise<import(".prisma/client").Stocks>;
    updateStock(id: number, dto: StocksDto): Promise<import(".prisma/client").Stocks>;
}
