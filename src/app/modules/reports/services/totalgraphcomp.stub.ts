import {PerDayInfo} from '../models/totalgraphscomp.model';
import {PerTypeInfo} from '../models/totalgraphscomp.model';
import {PerVehicleInfo} from '../models/totalgraphscomp.model';

const TotalDay: PerDayInfo = {
    day: 'Monday',
    amountPerDay: 52
};
const TotalDays: PerDayInfo[] = [
    {day: 'Monday', amountPerDay: 24},
    {day: 'Tuesday', amountPerDay: 24},
    {day: 'Wednesday', amountPerDay: 24},
    {day: 'Thursday', amountPerDay: 24},
    {day: 'Friday', amountPerDay: 24},
    {day: 'Saturday', amountPerDay: 24},
    {day: 'Sunday', amountPerDay: 24},
];
const TotalType: PerTypeInfo = {
    type: 'Demo',
    amount: 52
};
const TotalTypes: PerTypeInfo[] = [
    {type: 'Demo', amount: 24},
    {type: 'Rental', amount: 24},
];

const TotalVehicle: PerVehicleInfo = {
    id: 'Monday',
    amountPerVehicle: 52
};
const TotalVehicles: PerVehicleInfo[] = [
    {id: 'DEM-0572 (FC57HBGP)', amountPerVehicle: 24},
    {id: 'DEM-0572 (FC57HBGP)', amountPerVehicle: 10},
    {id: 'REN-0238 (FYH887FS)', amountPerVehicle: 6},
    {id: 'DEM-0572 (FC57HBGP)', amountPerVehicle: 80},
    {id: 'REN-0238 (FYH887FS)', amountPerVehicle: 48},
    {id: 'REN-0238 (FYH887FS)', amountPerVehicle: 106},
    {id: 'REN-0238 (FYH887FS)', amountPerVehicle: 206},
    {id: 'DEM-0572 (FC57HBGP)', amountPerVehicle: 5},
    {id: 'REN-0238 (FYH887FS)', amountPerVehicle: 18},
    {id: 'DEM-0572 (FC57HBGP)', amountPerVehicle: 258},
];


export const TotalGraphsCompMocks = {
    TotalDay,
    TotalDays,
    TotalType,
    TotalTypes,
    TotalVehicle,
    TotalVehicles
};
