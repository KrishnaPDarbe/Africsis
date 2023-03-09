import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryBoardComponent } from './advisory-board.component';

describe('AdvisoryBoardComponent', () => {
  let component: AdvisoryBoardComponent;
  let fixture: ComponentFixture<AdvisoryBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvisoryBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisoryBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
