import { Module } from '@nestjs/common';
import { DatabaseModule } from './DB/Database.module';
import {AreaService} from "./Services/Area.service";
import {AreaController} from "./Controllers/Area.controller";
import {UserModule} from "./modules/user.module";
import { SocketModule } from './Socket/Socket.module';
import {TargetController} from "./Controllers/Target.contoller";
import {TargetService} from "./Services/Target.service";


@Module({
  imports: [DatabaseModule, UserModule, SocketModule],
  controllers: [AreaController, TargetController],
  providers: [AreaService, TargetService],
})

export class AppModule {}
