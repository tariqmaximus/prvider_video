import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRoomComponent } from './doctorRoom.component';

describe('DoctorRoomComponent', () => {
  let component: DoctorRoomComponent;
  let fixture: ComponentFixture<DoctorRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorRoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
