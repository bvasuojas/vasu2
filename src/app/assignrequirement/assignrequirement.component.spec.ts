import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignrequirementComponent } from './assignrequirement.component';

describe('AssignrequirementComponent', () => {
  let component: AssignrequirementComponent;
  let fixture: ComponentFixture<AssignrequirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignrequirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignrequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
