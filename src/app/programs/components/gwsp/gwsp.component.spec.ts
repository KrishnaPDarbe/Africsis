import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GwspComponent } from './gwsp.component';

describe('GwspComponent', () => {
  let component: GwspComponent;
  let fixture: ComponentFixture<GwspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GwspComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GwspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
