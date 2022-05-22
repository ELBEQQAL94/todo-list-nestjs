import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('main.ts');
  app.setGlobalPrefix('/api');
  app.enableCors({
    origin: "*"
  });
  app.useGlobalPipes(new ValidationPipe());
  const PORT = process.env.PORT || 4444;
  await app.listen(PORT, () => logger.log(`Server start on http://localhost:${PORT}`));
}
bootstrap();
