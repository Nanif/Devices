import {Inject, Injectable} from "@nestjs/common";
import {User} from "src/DB/Entities/User.entity";
import {registerDto} from "../Dto/register-dto";
import {throwError} from "rxjs";
import {UserModel} from "../Models/User.model";
import * as bcrypt from 'bcrypt'
import {Roles} from "../Models/Enums/Roles";
import {UsersPermissions} from "../DB/Entities/UsersPermissions.entity";
import {where} from "sequelize";
import {Permission} from "../DB/Entities/Permission.entity";

// const bcrypt = require('bcryptjs');

@Injectable()
export class UserDao {
    private bcrypt: any;

    constructor(@Inject('Users_REPOSITORY') private readonly Users_REPOSITORY: typeof User) {
    }

    async register(user: UserModel): Promise<User> {
        let hashedPassword = '';

        await this.hashPassword(user.password).then((res) => {
            hashedPassword = res;
        }).catch(error => {

        })

        return new Promise<User>(async (resolve, reject) => {
            try {

                let userEntity = await this.Users_REPOSITORY.create(user);

                let userPermission: UsersPermissions = {
                    userId: userEntity.id,
                    permissionId: 1
                }

                let userPermission2: UsersPermissions = {
                    userId: userEntity.id,
                    permissionId: 2
                }
                const res1 = await this.UsersPermissions_REPOSITORY.create(userPermission);
                const res2 = await this.UsersPermissions_REPOSITORY.create(userPermission2);
                // await areaEntity.addCamera(camera);
                if (userEntity) {
                    resolve(userEntity)
                } else {
                    resolve(null)
                }
            } catch (e) {
                reject(e)
            }
        })
    }

    async findAll(): Promise<User[]> {
        return await this.Users_REPOSITORY.findAll<User>();
    }

    async getUserByEmailPassword(user: UserModel): Promise<User> {
        return new Promise<User>(async (resolve, reject) => {

            const usr = await this.Users_REPOSITORY.findOne({
                include:[Permission],
                where: {
                    email: user.email,
                }
            })
            if (usr) {
                const isValidPassword = await this.comparePassword(user.password, usr.password)
                if (isValidPassword) {
                    resolve(usr);
                }
            } else {
                throwError(new Error('this is an important exception'))
            }
        })
    }

    async findByEmail(email: string): Promise<User> {
        return new Promise<User>(async (resolve, reject) => {
            try {
                const user = await this.Users_REPOSITORY.findOne({
                    where: {email: email}
                })

                if (user) {
                    return resolve(user)
                } else {
                    reject('something went wrong!')
                }
            } catch (e) {
                reject(e)
            }
        })

    }

    async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 8);
    }

    async comparePassword(loginPassword, currentPassword): Promise<boolean> {
        return true
        // const res = await this.bcrypt.compare(loginPassword, currentPassword, function(err, res) {
        //     // res == true
        //     console.log(res);
        // });
        // return  res;
    }
}