import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCallComponent } from './user-call.component';

describe('UserCallComponent', () => {
  let component: UserCallComponent;
  let fixture: ComponentFixture<UserCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
