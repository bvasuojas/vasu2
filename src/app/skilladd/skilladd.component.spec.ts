import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilladdComponent } from './skilladd.component';

describe('SkilladdComponent', () => {
  let component: SkilladdComponent;
  let fixture: ComponentFixture<SkilladdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkilladdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilladdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
