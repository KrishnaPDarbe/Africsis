import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NDPComponent } from './ndp.component';

describe('NDPComponent', () => {
  let component: NDPComponent;
  let fixture: ComponentFixture<NDPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NDPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NDPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
