import { Injectable } from '@angular/core';
import { EngineHours } from '../models/hour.model';
import {HoursMocks} from './enginehours.stub';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HourspervehicleService {
  private engineHours = [...HoursMocks.Hours];
  constructor() { }
  public getEngineHours(): Observable<EngineHours[]> {
    return of(this.engineHours).pipe();
  }
}
