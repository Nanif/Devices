import { Module } from '@nestjs/common';
import {databaseProvider} from "./Database.provider";
import {AreaProviders} from "./EntityProviders/Area.provider";
import {UserProviders} from "./EntityProviders/User.provider";
import {TargetProviders} from "./EntityProviders/Target.provider";
import {RadarProviders} from "./EntityProviders/Radar.provider";
import {CameraProviders} from "./EntityProviders/Camera.provider";
import {PlaceProviders} from "./EntityProviders/Place.provider";
import {PermissionProvider} from './EntityProviders/Permission.provider'
import {UsersPermissionProvider} from "./EntityProviders/UsersPermissions.provider";
import {UserDao} from "../Dao/User.dao";
import {AreaDao} from "../Dao/Area.dao";


const providers = [
    ...databaseProvider,
    ...AreaProviders,
    ...UserProviders,
    ...TargetProviders,
    ...RadarProviders,
    ...CameraProviders,
    ...PlaceProviders,
    ...PermissionProvider,
    ...UsersPermissionProvider
];

const daos = [
    UserDao,
    AreaDao
];

@Module({
    providers: [...providers,...daos],
    exports: [...providers,...daos],
})
export class DatabaseModule {}