import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeSubComponent } from './mode-sub.component';

describe('ModeSubComponent', () => {
  let component: ModeSubComponent;
  let fixture: ComponentFixture<ModeSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
