import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppageComponent } from './uppage.component';

describe('UppageComponent', () => {
  let component: UppageComponent;
  let fixture: ComponentFixture<UppageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UppageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
