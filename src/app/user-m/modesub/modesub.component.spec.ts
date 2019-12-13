import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModesubComponent } from './modesub.component';

describe('ModesubComponent', () => {
  let component: ModesubComponent;
  let fixture: ComponentFixture<ModesubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModesubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModesubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
