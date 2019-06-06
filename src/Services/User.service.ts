import {Inject, Injectable} from "@nestjs/common";
import {User} from "src/DB/Entities/User.entity";
import {registerDto} from "../Dto/register-dto";
import {UserDao} from "../Dao/User.dao";

@Injectable()
export class UserService {

    constructor(private readonly userDao: UserDao) {
    }

    async register(user: registerDto): Promise<User> {
        return new Promise<User>(async (resolve, reject) => {
            try {
                let newUser = await this.userDao.register(user);
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
                console.log(res)
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