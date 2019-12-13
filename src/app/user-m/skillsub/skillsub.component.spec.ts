import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsubComponent } from './skillsub.component';

describe('SkillsubComponent', () => {
  let component: SkillsubComponent;
  let fixture: ComponentFixture<SkillsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
