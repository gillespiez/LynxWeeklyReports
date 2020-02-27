import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerVehicleComponent } from './per-vehicle.component';

describe('PerVehicleComponent', () => {
  let component: PerVehicleComponent;
  let fixture: ComponentFixture<PerVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
