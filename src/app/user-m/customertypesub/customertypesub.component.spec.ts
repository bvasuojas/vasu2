import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomertypesubComponent } from './customertypesub.component';

describe('CustomertypesubComponent', () => {
  let component: CustomertypesubComponent;
  let fixture: ComponentFixture<CustomertypesubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomertypesubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomertypesubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
