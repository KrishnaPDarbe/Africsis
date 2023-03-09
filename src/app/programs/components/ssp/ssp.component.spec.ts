import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSPComponent } from './ssp.component';

describe('SSPComponent', () => {
  let component: SSPComponent;
  let fixture: ComponentFixture<SSPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SSPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
