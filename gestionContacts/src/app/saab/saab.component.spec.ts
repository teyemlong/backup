import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaabComponent } from './saab.component';

describe('SaabComponent', () => {
  let component: SaabComponent;
  let fixture: ComponentFixture<SaabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
