import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from "./prisma.service";
import { ConfigModule } from '@nestjs/config'
import { WorksModule } from './works/works.module';
import { StocksModule } from './stocks/stocks.module';
import { ServicesModule } from './services/services.module';
import { InfoModule } from './info/info.module';
import { RequestModule } from './request/request.module';

@Module({
  imports: [ConfigModule.forRoot(),AuthModule, WorksModule, StocksModule, ServicesModule, InfoModule, RequestModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
