import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeDiplomaBibleTheologyComponent } from './programme-diploma-bible-theology.component';

describe('ProgrammeDiplomaBibleTheologyComponent', () => {
  let component: ProgrammeDiplomaBibleTheologyComponent;
  let fixture: ComponentFixture<ProgrammeDiplomaBibleTheologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeDiplomaBibleTheologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeDiplomaBibleTheologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
