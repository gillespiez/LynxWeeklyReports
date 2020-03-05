import { Injectable } from '@angular/core';
import {PerDayMocks} from '../services/perday.stub';
import { PerDay} from '../models/perday.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerdaygraphService {
private perDay = [...PerDayMocks.HoursDay];
  constructor() { }
  public getHoursPerDay(): Observable<PerDay[]> {
    return of(this.perDay).pipe();
  }
}
