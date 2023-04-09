import {Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import { WorksService } from './works.service';
import {WorksDto} from "./dto/works.dto";
import {Auth} from "../auth/decorators/auth.decorator";

@Controller('works')
export class WorksController {
  constructor(private readonly worksService: WorksService) {}

  @Get()
  async getAllWorks() {
    return this.worksService.getAllWorks()
  }

  @Get(':id')
  async getOneWork(@Param('id') id: string) {
    return this.worksService.getOneWork(+id)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post()
  async addWork(@Body() dto: WorksDto) {
    return this.worksService.addWork(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Delete(':id')
  async deleteWork(@Param('id') id: string) {
    return this.worksService.deleteWork(+id)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Patch(':id')
  async updateWork(@Param('id') id: string,
                    @Body() dto: WorksDto) {
    return this.worksService.updateWork(+id, dto)
  }
}