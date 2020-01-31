import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeDiplomaChildDevComponent } from './programme-diploma-child-dev.component';

describe('ProgrammeDiplomaChildDevComponent', () => {
  let component: ProgrammeDiplomaChildDevComponent;
  let fixture: ComponentFixture<ProgrammeDiplomaChildDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeDiplomaChildDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeDiplomaChildDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
