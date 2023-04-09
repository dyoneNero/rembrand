import { Module } from '@nestjs/common';
import { InfoService } from './info.service';
import { InfoController } from './info.controller';
import {PrismaService} from "../prisma.service";

@Module({
  controllers: [InfoController],
  providers: [InfoService, PrismaService]
})
export class InfoModule {}
