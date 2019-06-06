import {Inject, Injectable} from "@nestjs/common";
import {User} from "src/DB/Entities/User.entity";
import {registerDto} from "../Dto/register-dto";
import {throwError} from "rxjs";

import * as bcrypt from 'bcrypt'

// const bcrypt = require('bcryptjs');

@Injectable()
export class UserDao {
    private bcrypt: any;

    constructor(@Inject('Users_REPOSITORY') private readonly Users_REPOSITORY: typeof User) {
    }

    async register(user: registerDto): Promise<User> {

        let hashedPassword = '';

        await this.hashPassword(user.password).then((res) => {
            hashedPassword = res;
        })


        return new Promise<User>(async (resolve, reject) => {
            try {
                let res = await this.Users_REPOSITORY.create({
                    name: user.name,
                    email: user.email,
                    password: hashedPassword
                });
                if (res) {
                    console.log('res', res)
                    resolve(res)
                } else {
                    console.log('not res!!')
                    resolve(null)
                }
            } catch (e) {
                console.warn('message', e.message);
                reject(e)
            }
        })
    }

    async findAll(): Promise<User[]> {
        return await this.Users_REPOSITORY.findAll<User>();
    }

    async login(user): Promise<boolean> {
        const usr = await this.Users_REPOSITORY.findOne({
            attributes: ['password'],
            where: {
                email: user.email,
            }
        })

        if (usr) {
            console.log('rtyuio')
            return await this.comparePassword(user.password, usr.password)
        } else {
            console.log('error')
            throwError(new Error('this is an important exception'))
        }
    }

    async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 8);
    }

    async comparePassword(loginPassword, currentPassword): Promise<boolean> {
        return await this.bcrypt.compare(loginPassword, currentPassword)
    }
}