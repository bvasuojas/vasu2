import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyassignmentsComponent } from './myassignments.component';

describe('MyassignmentsComponent', () => {
  let component: MyassignmentsComponent;
  let fixture: ComponentFixture<MyassignmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyassignmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyassignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
