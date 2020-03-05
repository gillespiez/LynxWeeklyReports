import { Injectable } from '@angular/core';
import { VehicleInfo } from '../models/vehicle.model';
import { VehicleMocks } from './vehicles.stub';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private vehicles = [...VehicleMocks.Vehicles];

  constructor() { }

  public getVehicles(): Observable<VehicleInfo[]> {
    return of(this.vehicles).pipe(delay(2000));
  }
}
