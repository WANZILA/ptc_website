import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeEditCourseDescriptionComponent } from './programme-edit-course-description.component';

describe('ProgrammeEditCourseDescriptionComponent', () => {
  let component: ProgrammeEditCourseDescriptionComponent;
  let fixture: ComponentFixture<ProgrammeEditCourseDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeEditCourseDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeEditCourseDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
