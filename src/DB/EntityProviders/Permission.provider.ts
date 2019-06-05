
import { Permission } from '../Entities/Permission.entity';

export const PermissionProvider = [
    {
        provide: 'Permission_REPOSITORY',
        useValue: Permission,
    },
];