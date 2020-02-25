import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalGraphsComponent } from './total-graphs.component';

describe('TotalGraphsComponent', () => {
  let component: TotalGraphsComponent;
  let fixture: ComponentFixture<TotalGraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalGraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
