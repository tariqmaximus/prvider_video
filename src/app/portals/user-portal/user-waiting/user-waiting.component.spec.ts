import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWaitingComponent } from './user-waiting.component';

describe('UserWaitingComponent', () => {
  let component: UserWaitingComponent;
  let fixture: ComponentFixture<UserWaitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserWaitingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
