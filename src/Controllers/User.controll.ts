import {Body, Controller, Get, HttpStatus, Post, Query, Res} from "@nestjs/common";
import {UserService} from "../Services/User.service";
import {registerDto} from "../Dto/register-dto";
import {Response} from "express";


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get('login')
    login(@Query() request, @Res() res: Response): Response {

        this.userService.login(request).then((result) => {
            return res.status(HttpStatus.OK).send({user: 'user'})

        }).catch(error => {
            return res.status(HttpStatus.BAD_REQUEST).send(error)
        })
        return res.status(HttpStatus.BAD_REQUEST).send({})
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
    getUserByToken(@Body() registerUser: registerDto, @Res() res: Response): any {
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