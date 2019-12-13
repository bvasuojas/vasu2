import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateaddComponent } from './certificateadd.component';

describe('CertificateaddComponent', () => {
  let component: CertificateaddComponent;
  let fixture: ComponentFixture<CertificateaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
