import {Injectable} from "@nestjs/common";
import {User} from "src/DB/Entities/User.entity";
import {registerDto} from "../Dto/register-dto";
import {UserDao} from "../Dao/User.dao";
import {UserModel} from "../Models/User.model";
import {Roles} from "../Models/Enums/Roles";
import {Permission} from "../DB/Entities/Permission.entity";
import {UserLoginRequestDto} from "../Dto/User-login-request-dto";
import {getUserRequestDto} from "../Dto/get-user-request-dto";
import {TokenDto} from "../Dto/Token-dto";
import {JwtService} from "@nestjs/jwt";
import {isLowerCase} from "tslint/lib/utils";

@Injectable()
export class UserService {

    constructor(private readonly userDao: UserDao, private readonly jwtService: JwtService) {
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

    async getUserByEmailPassword(user: getUserRequestDto): Promise<User> {
        return new Promise<User>(async (resolve, reject) => {
            try {
                let userModel: UserModel = {
                    email: user.email,
                    password: user.password
                }
                let res = await this.userDao.getUserByEmailPassword(userModel);
                if (res) {
                    resolve(res);
                }
                resolve(null)
            } catch (e) {
                reject(e)
            }
        })
    }

    async findByEmail(email: string): Promise<User> {
        return new Promise<User>(async (resolve, reject) => {
            try {
                let res = await this.userDao.findByEmail(email);
                if (res) {
                    resolve(res);
                }
                resolve(null)
            } catch (e) {
                reject(e)
            }
        })
    }

    async login(user: UserLoginRequestDto): Promise<TokenDto> {
        return new Promise<TokenDto>(async (resolve, reject) => {
            try {
                const userModel: UserModel = {
                    password: user.password,
                    email: user.email
                }
                let res = await this.userDao.getUserByEmailPassword(userModel);
                if (res) {
                    try {
                        const token = await this.createToken(res);
                        const tokenResponse: TokenDto = {
                            token: token
                        };
                        resolve(tokenResponse);
                    } catch (e) {
                        reject
                    }
                }
            } catch (e) {
                reject(e)
            }
        })
    }

    async createToken(user: User): Promise<string> {
        const userPermissionsId = user.permissions.map(item => item.dataValues.id)
        return await this.jwtService.sign({permissionsId: userPermissionsId, id: user.id});
    }
}