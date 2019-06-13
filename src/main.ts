import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as redisIoAdapter from 'socket.io-redis';
import {RedisIoAdapter} from "./Services/Redis.service";

async function bootstrap() {
  const redisAdapter = redisIoAdapter({ host: 'localhost', port: 6379 });

  const ref = require('./Services/index');

  const app = await NestFactory.create(AppModule);
  app.useWebSocketAdapter(new RedisIoAdapter(app));

  await app.listen(3000);
}
bootstrap();
