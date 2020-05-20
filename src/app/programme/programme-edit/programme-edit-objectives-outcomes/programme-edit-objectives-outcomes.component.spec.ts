import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeEditObjectivesOutcomesComponent } from './programme-edit-objectives-outcomes.component';

describe('ProgrammeEditObjectivesOutcomesComponent', () => {
  let component: ProgrammeEditObjectivesOutcomesComponent;
  let fixture: ComponentFixture<ProgrammeEditObjectivesOutcomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeEditObjectivesOutcomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeEditObjectivesOutcomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
