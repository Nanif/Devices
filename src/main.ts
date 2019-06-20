import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {RedisIoAdapter} from "./Services/Redis.service";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useWebSocketAdapter(new RedisIoAdapter(app));
  // app.connectMicroservice(ApplicationModule, {
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: [`amqp://localhost:5672`],
  //     queue: 'cats_queue',
  //     queueOptions: { durable: false },
  //   },
  // })
  await app.listen(3000);
  // console.log('returned')
}
bootstrap();



// const app = await NestFactory.createMicroservice(ApplicationModule, {
//   transport: Transport.RMQ,
//   options: {
//     urls: [`amqp://localhost:5672`],
//     queue: 'cats_queue',
//     queueOptions: { durable: false },
//   },
// });