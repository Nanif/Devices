
import {UsersPermissions} from '../Entities/UsersPermissions.entity';

export const UsersPermissionProvider = [
    {
        provide: 'UsersPermissions_REPOSITORY',
        useValue: UsersPermissions,
    },
];