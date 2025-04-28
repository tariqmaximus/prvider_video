import { ComponentFixture, TestBed } from '@angular/core/testing';

import { providerPortalComponent } from './provider-portal.component';

describe('providerPortalComponent', () => {
  let component: providerPortalComponent;
  let fixture: ComponentFixture<providerPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [providerPortalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(providerPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
