import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmProblemsComponent } from './fm-problems.component';

describe('FmProblemsComponent', () => {
  let component: FmProblemsComponent;
  let fixture: ComponentFixture<FmProblemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FmProblemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
