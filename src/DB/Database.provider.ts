import { Sequelize } from 'sequelize-typescript';
import {Radar} from './Entities/Radar.entity'
import {Camera} from './Entities/Camera.entity'
import {Area} from './Entities/Area.entity'
import {Place} from './Entities/Place.entity'
import {User} from './Entities/User.entity'
import {Target} from './Entities/Target.entity'
import {Permission} from './Entities/Permission.entity'
import {UsersPermissions} from './Entities/UsersPermissions.entity'

export const databaseProvider = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '770770',
                database: 'DB',
            });
            sequelize.addModels([Radar, Camera, Area, Place, User, Target, Permission, UsersPermissions]);
            await sequelize.sync();
            return sequelize;
        },
    },
];


