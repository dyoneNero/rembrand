import {Body, Controller, Delete, Get, HttpCode, Param, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { RequestService } from './request.service';
import {CreateRequestDto} from "./dto/create-request.dto";

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Get()
  @Auth()
  async getAll() {
    return this.requestService.getAll()
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  async addOne(@Body() dto: CreateRequestDto) {
    return this.requestService.addOne(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Delete(':id')
  async delete(@Param('id') id: string | number) {
    return this.requestService.delete(+id)
  }
}
