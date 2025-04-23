import { ComponentFixture, TestBed } from '@angular/core/testing';

import { waitingRoomComponent } from './waitingRoom.component';

describe('waitingRoomComponent', () => {
  let component: waitingRoomComponent;
  let fixture: ComponentFixture<waitingRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [waitingRoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(waitingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
