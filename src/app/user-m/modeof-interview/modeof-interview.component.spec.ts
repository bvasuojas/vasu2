import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeofInterviewComponent } from './modeof-interview.component';

describe('ModeofInterviewComponent', () => {
  let component: ModeofInterviewComponent;
  let fixture: ComponentFixture<ModeofInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeofInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeofInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
