import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NSPComponent } from './nsp.component';

describe('NSPComponent', () => {
  let component: NSPComponent;
  let fixture: ComponentFixture<NSPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NSPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
