import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcustomercontactComponent } from './addcustomercontact.component';

describe('AddcustomercontactComponent', () => {
  let component: AddcustomercontactComponent;
  let fixture: ComponentFixture<AddcustomercontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcustomercontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcustomercontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
