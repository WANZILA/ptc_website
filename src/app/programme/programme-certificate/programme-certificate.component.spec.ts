import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeCertificateComponent } from './programme-certificate.component';

describe('ProgrammeCertificateComponent', () => {
  let component: ProgrammeCertificateComponent;
  let fixture: ComponentFixture<ProgrammeCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
