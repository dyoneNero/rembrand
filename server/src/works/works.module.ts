import { Module } from '@nestjs/common';
import { WorksService } from './works.service';
import { WorksController } from './works.controller';
import {PrismaService} from "../prisma.service";

@Module({
  controllers: [WorksController],
  providers: [WorksService, PrismaService]
})
export class WorksModule {}
