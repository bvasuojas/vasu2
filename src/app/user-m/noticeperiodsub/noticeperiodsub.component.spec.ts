import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeperiodsubComponent } from './noticeperiodsub.component';

describe('NoticeperiodsubComponent', () => {
  let component: NoticeperiodsubComponent;
  let fixture: ComponentFixture<NoticeperiodsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeperiodsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeperiodsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
