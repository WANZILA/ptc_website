import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeDiplomaCounselingAndGuidanceComponent } from './programme-diploma-counseling-and-guidance.component';

describe('ProgrammeDiplomaCounselingAndGuidanceComponent', () => {
  let component: ProgrammeDiplomaCounselingAndGuidanceComponent;
  let fixture: ComponentFixture<ProgrammeDiplomaCounselingAndGuidanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeDiplomaCounselingAndGuidanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeDiplomaCounselingAndGuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
