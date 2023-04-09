import {Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import { ServicesService } from './services.service';
import {ServicesDto} from "./dto/services.dto";
import { Auth } from 'src/auth/decorators/auth.decorator';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  async getAllServices () {
    return this.servicesService.getAllServices()
  }

  @Get(':id')
  async getOneService(@Param('id') id: string) {
    return this.servicesService.getOneService(+id)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post()
  async addService (@Body() dto: ServicesDto) {
    return this.servicesService.addService(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Delete(':id')
  async deleteService(@Param('id') id: string) {
    return this.servicesService.deleteService(+id)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Patch(':id')
  async updateService(@Param('id') id: string,
                    @Body() dto: ServicesDto) {
    return this.servicesService.updateService(+id, dto)
  }
}
