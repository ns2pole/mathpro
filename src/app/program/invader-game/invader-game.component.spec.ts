import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvaderGameComponent } from './invader-game.component';

describe('InvaderGameComponent', () => {
  let component: InvaderGameComponent;
  let fixture: ComponentFixture<InvaderGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvaderGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvaderGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
