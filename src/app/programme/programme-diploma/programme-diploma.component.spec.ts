import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeDiplomaComponent } from './programme-diploma.component';

describe('ProgrammeDiplomaComponent', () => {
  let component: ProgrammeDiplomaComponent;
  let fixture: ComponentFixture<ProgrammeDiplomaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeDiplomaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeDiplomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
