import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalareComponent } from './instalare.component';

describe('InstalareComponent', () => {
  let component: InstalareComponent;
  let fixture: ComponentFixture<InstalareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstalareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
