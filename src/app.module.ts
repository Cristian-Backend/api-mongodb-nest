import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from './students/students.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que las variables de entorno estén disponibles globalmente
    }),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      // Las opciones deben estar dentro del objeto de configuración
      family:4, // conexion ipv4
  
    }),
    StudentsModule, // Importamos el módulo de estudiantes
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}