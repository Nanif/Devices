
import { Place } from '../Entities/Place.entity';

export const PlaceProviders = [
    {
        provide: 'Places_REPOSITORY',
        useValue: Place,
    },
];