import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleProgramComponent } from './sample-program.component';

describe('SampleProgramComponent', () => {
  let component: SampleProgramComponent;
  let fixture: ComponentFixture<SampleProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
