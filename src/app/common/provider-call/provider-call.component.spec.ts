import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderCallComponent } from './provider-call.component';

describe('ProviderCallComponent', () => {
  let component: ProviderCallComponent;
  let fixture: ComponentFixture<ProviderCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProviderCallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
