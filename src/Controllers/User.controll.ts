import {UserService} from "../Services/User.service";
import {registerDto} from "../Dto/register-dto";
import {Response} from "express";
import {AuthGuard} from "../shared/Auth.guard";
import {UserLoginRequestDto} from "../Dto/User-login-request-dto";
import { User } from  '../DB/Entities/User.entity';
import {JwtService} from "@nestjs/jwt";


import {Body, Controller, Get, HttpStatus, Post, Query, Res, UseGuards} from "@nestjs/common";
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {

    }

    @Get('login')
    // @UseGuards(new AuthGuard())
   async login(@Query() request: UserLoginRequestDto, @Res() res: Response): Promise<object>{
       const result = await this.userService.login(request);
        if (!result) {
            return res.status(HttpStatus.BAD_REQUEST).send({error:'Something went wrong'})
        }
        return res.status(HttpStatus.OK).send({token: result.token})
    }

    @Post('register')
    register(@Body() registerUser: registerDto, @Res() res: Response): any {
        this.userService.register(registerUser).then((user) => {

            if (!user) {
                return res.status(HttpStatus.BAD_REQUEST).send({error: 'Could not create user'})
            }
            return res.status(HttpStatus.CREATED).send({user: user})
        }).catch(error => {
            return res.status(HttpStatus.BAD_REQUEST).send({
                message: 'could not register user. Try again',
                error: error
            })
        })
    }

    // updateUser()
    @Post()
    getUserByToken(@Body()
                       registerUser: registerDto, @Res()
                       res: Response
    ):
        any {
        //
        // try {
        //     const user = this.userService.register(registerUser).then(() => {
        //         if (!user) {
        //             return res.status(HttpStatus.BAD_REQUEST).send({error: 'Could not create user'})
        //         }
        //         return res.status(HttpStatus.CREATED).send({user: user})
        //     })
        // } catch (e) {
        //     return res.status(HttpStatus.BAD_REQUEST).send({error: 'Something went wrong, please try again!'})
        // }
    }

}
