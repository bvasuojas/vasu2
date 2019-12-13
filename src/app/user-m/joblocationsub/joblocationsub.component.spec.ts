import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoblocationsubComponent } from './joblocationsub.component';

describe('JoblocationsubComponent', () => {
  let component: JoblocationsubComponent;
  let fixture: ComponentFixture<JoblocationsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoblocationsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoblocationsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
