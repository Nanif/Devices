import { Module } from '@nestjs/common';
import { DatabaseModule } from './DB/Database.module';
import {AreaService} from "./Services/Area.service";
import {AreaController} from "./Controllers/Area.controller";
import {UserModule} from "./modules/user.module";
import {JwtModule} from "@nestjs/jwt";
import { SocketModule } from './Socket/Socket.module';


@Module({
  imports: [DatabaseModule, UserModule, SocketModule],
  controllers: [AreaController],
  providers: [AreaService],
})

export class AppModule {}
