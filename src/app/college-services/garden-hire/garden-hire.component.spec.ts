import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenHireComponent } from './garden-hire.component';

describe('GardenHireComponent', () => {
  let component: GardenHireComponent;
  let fixture: ComponentFixture<GardenHireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GardenHireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenHireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
