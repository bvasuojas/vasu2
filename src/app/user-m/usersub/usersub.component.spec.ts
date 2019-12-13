import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersubComponent } from './usersub.component';

describe('UsersubComponent', () => {
  let component: UsersubComponent;
  let fixture: ComponentFixture<UsersubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
