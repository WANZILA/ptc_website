import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationProcedureComponent } from './application-procedure.component';

describe('ApplicationProcedureComponent', () => {
  let component: ApplicationProcedureComponent;
  let fixture: ComponentFixture<ApplicationProcedureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationProcedureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
