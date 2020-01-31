import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeDiplomaItComponent } from './programme-diploma-it.component';

describe('ProgrammeDiplomaItComponent', () => {
  let component: ProgrammeDiplomaItComponent;
  let fixture: ComponentFixture<ProgrammeDiplomaItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeDiplomaItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeDiplomaItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
