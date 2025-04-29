import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCheckinComponent } from './user-checkin.component';

describe('UserCheckinComponent', () => {
  let component: UserCheckinComponent;
  let fixture: ComponentFixture<UserCheckinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCheckinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
