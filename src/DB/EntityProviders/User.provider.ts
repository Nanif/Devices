
import { User } from '../Entities/User.entity';

export const UserProviders = [
    {
        provide: 'Users_REPOSITORY',
        useValue: User,
    },
];