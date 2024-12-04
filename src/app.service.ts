import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  constructor (@InjectConnection() private connection: Connection ) {}

  async onModuleInit(){
    const isConected = this.connection.readyState ===1;
    console.log(`MongoDB ${isConected? 'Connected' : 'Disconnected'}`)  // Check if MongoDB is connected or not.
  }
}
