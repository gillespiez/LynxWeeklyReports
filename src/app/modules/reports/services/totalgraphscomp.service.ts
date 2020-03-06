import { Injectable } from '@angular/core';
import { TotalGraphsCompMocks } from './totalgraphcomp.stub';
import { Observable, of } from 'rxjs';
import { PerDayInfo, PerTypeInfo } from '../models/totalgraphscomp.model';
import { PerVehicleInfo } from '../models/totalgraphscomp.model';

@Injectable({
  providedIn: 'root'
})
export class TotalgraphscompService {
  private perType = [...TotalGraphsCompMocks.TotalTypes];
  private perVehicle = [...TotalGraphsCompMocks.TotalVehicles];
  private perDay = [...TotalGraphsCompMocks.TotalDays];
  constructor() { }
  public getTotalAmountPerDay(): Observable<PerDayInfo[]> {
    return of(this.perDay).pipe();
  }
  public getTotalAmountPerType(): Observable<PerTypeInfo[]> {
    return of(this.perType).pipe();
  }
  public getTotalAmountPerVehicle(): Observable<PerVehicleInfo[]> {
    return of(this.perVehicle).pipe();
  }
}
