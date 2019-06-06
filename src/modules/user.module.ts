import { Module } from '@nestjs/common';
import {UserController} from "../Controllers/User.controll";
import {UserService} from "../Services/User.service";
import {DatabaseModule} from "../DB/Database.module";

@Module({
    imports:[DatabaseModule],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})

export class UserModule {}
