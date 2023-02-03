import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeFactorizationComponent } from './prime-factorization.component';

describe('PrimeFactorizationComponent', () => {
  let component: PrimeFactorizationComponent;
  let fixture: ComponentFixture<PrimeFactorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeFactorizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeFactorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
