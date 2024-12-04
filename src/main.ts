import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api') // modifica la ruta, en este caso seria /api/students

  // habilitacion de validaciones 
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted:true
  }))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();