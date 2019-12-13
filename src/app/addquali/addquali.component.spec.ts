import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddqualiComponent } from './addquali.component';

describe('AddqualiComponent', () => {
  let component: AddqualiComponent;
  let fixture: ComponentFixture<AddqualiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddqualiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddqualiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
