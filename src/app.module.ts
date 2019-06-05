import { Module } from '@nestjs/common';
import { DatabaseModule } from './DB/Database.module';
import {AreaService} from "./Services/Area.service";
import {AreaController} from "./Controllers/Area.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [AreaController],
  providers: [AreaService],
})
export class AppModule {}
