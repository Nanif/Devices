import {Controller, Get, Query} from "@nestjs/common";
import {UserService} from "../Services/UserService.service";


@Controller('user')
export class UserControll {
    constructor(private readonly userService: UserService) {}


}