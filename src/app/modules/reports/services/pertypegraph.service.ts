import { Injectable } from '@angular/core';
import {PerType} from '../models/pertype.model';
import {amountMocks} from '../services/pertype.stub';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PertypegraphService {
private perType = [...amountMocks.Types];
  constructor() { }
  public getAmountPerType(): Observable<PerType[]> {
    return of(this.perType).pipe();
  }
}
