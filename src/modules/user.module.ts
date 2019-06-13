import {Module} from '@nestjs/common';
import {UserController} from "../Controllers/User.controll";
import {DatabaseModule} from "../DB/Database.module";
import {UserService} from "../Services/User.service";
import {UserDao} from "../Dao/User.dao";
import {JwtModule} from "@nestjs/jwt";

@Module({
    imports: [JwtModule.register({
        secret: 'secret12356789'}),
    DatabaseModule],
    controllers: [UserController],
    providers:[UserService],
    exports: [UserService]
})
export class UserModule {
}
