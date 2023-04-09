import {Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import { StocksService } from './stocks.service';
import {StocksDto} from "./dto/stocks.dto";
import {Auth} from "../auth/decorators/auth.decorator";

@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Get()
  async getAllStocks() {
    return this.stocksService.getAllStocks()
  }

  @Get(':id')
  async getOneStock(@Param('id') id: string) {
    return this.stocksService.getOneStock(+id)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post()
  async addStock(@Body() dto: StocksDto) {
    return this.stocksService.addStock(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Delete(':id')
  async deleteStock(@Param('id') id: string) {
    return this.stocksService.deleteStock(+id)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Patch(':id')
  async updateStock(@Param('id') id: string,
                    @Body() dto: StocksDto) {
    return this.stocksService.updateStock(+id, dto)
  }
}
