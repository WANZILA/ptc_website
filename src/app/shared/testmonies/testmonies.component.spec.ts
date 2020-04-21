import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmoniesComponent } from './testmonies.component';

describe('TestmoniesComponent', () => {
  let component: TestmoniesComponent;
  let fixture: ComponentFixture<TestmoniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestmoniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestmoniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
