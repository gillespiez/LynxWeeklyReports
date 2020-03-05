import { Injectable } from '@angular/core';
import { AmountPerVehicle } from '../models/pervehicle.model';
import {PerVehicleMocks} from './pervehicle.stub';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PervehiclegraphService {
  private perVehicle = [...PerVehicleMocks.AmountVehicles];
  constructor() { }
  public getAmountPerVehicles(): Observable<AmountPerVehicle[]> {
    return of(this.perVehicle).pipe();
  }
}
