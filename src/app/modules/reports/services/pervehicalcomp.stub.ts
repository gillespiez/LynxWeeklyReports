import {PerVehicleInfo} from '../models/pervehicalcomp.module';

const Vehicle: PerVehicleInfo = {
    day: '',
    engineHours: 1.7,
    maxSpeed: 10,
    distance: 12000,
};
const Vehicles: PerVehicleInfo[] = [
    {day: 'Monday', engineHours: 17, maxSpeed: 120, distance: 516},
    {day: 'Tuesday', engineHours: 16, maxSpeed: 18, distance: 4512},
    {day: 'Wednesday', engineHours: 6, maxSpeed: 59, distance: 56123},
    {day: 'Thursday', engineHours: 24, maxSpeed: 64, distance: 6263},
    {day: 'Friday', engineHours: 10, maxSpeed: 51, distance: 651},
    {day: 'Saturday', engineHours: 12, maxSpeed: 111, distance: 62},
    {day: 'Sunday', engineHours: 14, maxSpeed: 65, distance: 20},
];

export const PerVehicleCompMocks = {
    Vehicle,
    Vehicles
};
