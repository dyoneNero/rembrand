import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from "process";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api")
  app.enableCors({
    credentials: true,
    origin: true
  })
  await app.listen(process.env.PORT);
}
bootstrap();
