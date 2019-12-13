import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoComponent } from './addo.component';

describe('AddoComponent', () => {
  let component: AddoComponent;
  let fixture: ComponentFixture<AddoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
