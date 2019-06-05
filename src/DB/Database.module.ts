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


@Module({
    providers: providers,
    exports: providers,
})
export class DatabaseModule {}