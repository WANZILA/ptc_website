import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeDiplomaAgriBusinessComponent } from './programme-diploma-agri-business.component';

describe('ProgrammeDiplomaAgriBusinessComponent', () => {
  let component: ProgrammeDiplomaAgriBusinessComponent;
  let fixture: ComponentFixture<ProgrammeDiplomaAgriBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeDiplomaAgriBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeDiplomaAgriBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
