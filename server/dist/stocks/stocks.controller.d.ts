import { StocksService } from './stocks.service';
import { StocksDto } from "./dto/stocks.dto";
export declare class StocksController {
    private readonly stocksService;
    constructor(stocksService: StocksService);
    getAllStocks(): Promise<import(".prisma/client").Stocks[]>;
    getOneStock(id: string): Promise<import(".prisma/client").Stocks>;
    addStock(dto: StocksDto): Promise<import(".prisma/client").Stocks>;
    deleteStock(id: string): Promise<import(".prisma/client").Stocks>;
    updateStock(id: string, dto: StocksDto): Promise<import(".prisma/client").Stocks>;
}
