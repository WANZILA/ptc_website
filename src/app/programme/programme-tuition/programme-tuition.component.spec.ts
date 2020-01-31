import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeTuitionComponent } from './programme-tuition.component';

describe('ProgrammeTuitionComponent', () => {
  let component: ProgrammeTuitionComponent;
  let fixture: ComponentFixture<ProgrammeTuitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeTuitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeTuitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
