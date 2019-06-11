import { Module } from '@nestjs/common';
import { DatabaseModule } from './DB/Database.module';
import {AreaService} from "./Services/Area.service";
import {AreaController} from "./Controllers/Area.controller";
import {UserModule} from "./modules/user.module";
import {AuthModule} from "./modules/auth.module";

@Module({
  imports: [DatabaseModule, UserModule, AuthModule],
  controllers: [AreaController],
  providers: [AreaService],
})
export class AppModule {}
