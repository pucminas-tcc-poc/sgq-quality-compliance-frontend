import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonCompliencesComponent } from './non-compliences.component';

describe('NonCompliencesComponent', () => {
  let component: NonCompliencesComponent;
  let fixture: ComponentFixture<NonCompliencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonCompliencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonCompliencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
