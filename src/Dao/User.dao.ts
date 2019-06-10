import {Inject, Injectable} from "@nestjs/common";
import {User} from "src/DB/Entities/User.entity";
import {registerDto} from "../Dto/register-dto";
import {throwError} from "rxjs";
import {UserModel} from "../Models/User.model";
import * as bcrypt from 'bcrypt'
import {Roles} from "../Models/Enums/Roles";

// const bcrypt = require('bcryptjs');

@Injectable()
export class UserDao {
    private bcrypt: any;

    constructor(@Inject('Users_REPOSITORY') private readonly Users_REPOSITORY: typeof User) {
    }

    async register(user: UserModel): Promise<User> {
        console.log(user);
        let hashedPassword = '';

        await this.hashPassword(user.password).then((res) => {
            hashedPassword = res;
        }).catch(error=> {
        })

        return new Promise<User>(async (resolve, reject) => {
            try {
                user.role = Roles.regular;
                let res = await this.Users_REPOSITORY.create(user);

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
            return await this.comparePassword(user.password, usr.password)
        } else {
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