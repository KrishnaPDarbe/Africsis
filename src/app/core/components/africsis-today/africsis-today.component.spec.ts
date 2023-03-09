import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfricsisTodayComponent } from './africsis-today.component';

describe('AfricsisTodayComponent', () => {
  let component: AfricsisTodayComponent;
  let fixture: ComponentFixture<AfricsisTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfricsisTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfricsisTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
