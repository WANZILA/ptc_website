import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArMessageComponent } from './ar-message.component';

describe('ArMessageComponent', () => {
  let component: ArMessageComponent;
  let fixture: ComponentFixture<ArMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
