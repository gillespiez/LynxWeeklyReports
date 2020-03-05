import { Injectable } from '@angular/core';
import { PerVehicleCompMocks } from './pervehicalcomp.stub';
import { Observable, of } from 'rxjs';
import { PerVehicleInfo } from '../models/pervehicalcomp.module';

@Injectable({
  providedIn: 'root'
})
export class PervehiclecompgraphsService {
  private vehicle = [...PerVehicleCompMocks.Vehicles];
  constructor() { }
  public getVehicleDetails(): Observable<PerVehicleInfo[]> {
    return of(this.vehicle).pipe();
  }
}
