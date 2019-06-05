
import { Camera } from '../Entities/Camera.entity';

export const CameraProviders = [
    {
        provide: 'Cameras_REPOSITORY',
        useValue: Camera,
    },
];