import {Injectable} from "@nestjs/common";
import {User} from "src/DB/Entities/User.entity";
import {registerDto} from "../Dto/register-dto";
import {UserDao} from "../Dao/User.dao";
import {UserModel} from "../Models/User.model";
import {Roles} from "../Models/Enums/Roles";
import {Permission} from "../DB/Entities/Permission.entity";

@Injectable()
export class UserService {

    constructor(private readonly userDao: UserDao) {
    }

    async register(user: registerDto): Promise<User> {
        return new Promise<User>(async (resolve, reject) => {
            const userModel: UserModel = {
                name: user.name,
                password: user.password,
                email: user.email,
                role: user.role,

            }

            try {
                let newUser = await this.userDao.register(userModel);
                if (newUser) {
                    resolve(newUser);
                }
                resolve(null)
            } catch (e) {
                reject(e)
            }
        })
    }

    async login(user: registerDto): Promise<boolean> {
        return new Promise<boolean>(async (resolve, reject) => {
            try {
                let res = await this.userDao.login(user);
                if (res) {
                    resolve(res);
                }
                resolve(null)
            } catch (e) {
                reject(e)
            }
        })
    }
}