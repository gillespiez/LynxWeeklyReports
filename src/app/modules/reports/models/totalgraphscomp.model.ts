import { VehicleType } from './vehicle-type.model';

export interface PerDayInfo {
    day: string;
    amountPerDay: number;
}
export interface PerTypeInfo {
    type: VehicleType;
    amount: number;
}
export interface PerVehicleInfo {
    id: string;
    amountPerVehicle: number;
}
