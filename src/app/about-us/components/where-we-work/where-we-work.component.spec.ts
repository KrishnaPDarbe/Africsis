import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereWeWorkComponent } from './where-we-work.component';

describe('WhereWeWorkComponent', () => {
  let component: WhereWeWorkComponent;
  let fixture: ComponentFixture<WhereWeWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhereWeWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereWeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
