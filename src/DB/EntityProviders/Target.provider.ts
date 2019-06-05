import {Target} from "../Entities/Target.entity";


export const TargetProviders = [
    {
        provide: 'Targets_REPOSITORY',
        useValue: Target,
    },
];