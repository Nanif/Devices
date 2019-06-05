
import { Area } from '../Entities/Area.entity';

export const AreaProviders = [
    {
        provide: 'Areas_REPOSITORY',
        useValue: Area,
    },
];