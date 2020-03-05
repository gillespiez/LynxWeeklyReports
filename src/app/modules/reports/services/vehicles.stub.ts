import { VehicleInfo } from '../models/vehicle.model';
import { VehicleType } from '../models/vehicle-type.model';

const Vehicle: VehicleInfo = {
    id: 'DEM-0572 (FC57HBGP)',
    type: 'Demo',
    l100: 1.7,
    kml: 10,
    odometer: 12000,
};
const Vehicles: VehicleInfo[] = [
    {id: 'DEM-0572 (FC57HBGP)', type: 'Demo', l100: 1.7, kml: 10, odometer: 12000},
    {id: 'DEM-0572 (FC57HBGP)', type: 'Demo', l100: 4.6, kml: 8, odometer: 12000},
    {id: 'REN-0238 (FYH887FS)', type: 'Rental', l100: 6.1, kml: 9, odometer: 12000},
    {id: 'DEM-0572 (FC57HBGP)', type: 'Demo', l100: 9.2, kml: 4, odometer: 12000},
    {id: 'REN-0238 (FYH887FS)', type: 'Rental', l100: 10.1, kml: 1, odometer: 12000},
    {id: 'REN-0238 (FYH887FS)', type: 'Rental', l100: 12.7, kml: 1, odometer: 1200},
    {id: 'REN-0238 (FYH887FS)', type: 'Rental', l100: 14.7, kml: 5, odometer: 12000},
    {id: 'DEM-0572 (FC57HBGP)', type: 'Demo', l100: 15.4, kml: 8, odometer: 1200},
    {id: 'REN-0238 (FYH887FS)', type: 'Rental', l100: 18.9, kml: 5, odometer: 12000},
    {id: 'DEM-0572 (FC57HBGP)', type: 'Demo', l100: 20.1, kml: 9, odometer: 1200},
];

export const VehicleMocks = {
    Vehicle,
    Vehicles
};
