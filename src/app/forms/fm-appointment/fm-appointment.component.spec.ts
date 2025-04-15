import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmAppointmentComponent } from './fm-appointment.component';

describe('FmAppointmentComponent', () => {
  let component: FmAppointmentComponent;
  let fixture: ComponentFixture<FmAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FmAppointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
