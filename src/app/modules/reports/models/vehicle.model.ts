import { VehicleType } from './vehicle-type.model';

export interface VehicleInfo {
    id: string;
    type: VehicleType;
    l100: number;
    kml: number;
    odometer: number;
}
