import { Injectable } from '@angular/core';
import { VehicleInfo } from '../models/vehicle.model';
import { VehicleMocks } from './vehicles.stub';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { delay } from 'rxjs/operators';
import { VehicleType } from '../models/vehicle-type.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private vehicles = [...VehicleMocks.Vehicles];

  constructor() { }

  public getVehicles(): Observable<VehicleInfo[]> {
    return of(this.vehicles).pipe(
      delay(2000),
    );
  }

  public getDemoVehicles(): Observable<VehicleInfo[]> {
    return of(this.vehicles).pipe(
    );
  }
}
