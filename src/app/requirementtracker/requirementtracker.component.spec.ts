import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementtrackerComponent } from './requirementtracker.component';

describe('RequirementtrackerComponent', () => {
  let component: RequirementtrackerComponent;
  let fixture: ComponentFixture<RequirementtrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementtrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementtrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
