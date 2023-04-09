import {Body, Controller, Get, HttpCode, Param, Patch, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import { InfoService } from './info.service';
import {Auth} from "../auth/decorators/auth.decorator";
import { InfoDto } from './dto/info.dto';

@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Get(':id')
  async getOneInfo(@Param('id') id: string) {
    return this.infoService.getOneInfo(+id)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: InfoDto) {
    return this.infoService.update(+id, dto)
  }
}
