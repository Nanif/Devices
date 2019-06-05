import {Radar} from "../Entities/Radar.entity";


export const RadarProviders = [
    {
        provide: 'Radars_REPOSITORY',
        useValue: Radar,
    },
];