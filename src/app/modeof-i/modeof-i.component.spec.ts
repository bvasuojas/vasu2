import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeofIComponent } from './modeof-i.component';

describe('ModeofIComponent', () => {
  let component: ModeofIComponent;
  let fixture: ComponentFixture<ModeofIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeofIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeofIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
