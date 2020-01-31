import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeDiplomaSocailDevComponent } from './programme-diploma-socail-dev.component';

describe('ProgrammeDiplomaSocailDevComponent', () => {
  let component: ProgrammeDiplomaSocailDevComponent;
  let fixture: ComponentFixture<ProgrammeDiplomaSocailDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeDiplomaSocailDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeDiplomaSocailDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
