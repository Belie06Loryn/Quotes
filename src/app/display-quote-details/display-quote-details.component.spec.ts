import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayQuoteDetailsComponent } from './display-quote-details.component';

describe('DisplayQuoteDetailsComponent', () => {
  let component: DisplayQuoteDetailsComponent;
  let fixture: ComponentFixture<DisplayQuoteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayQuoteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayQuoteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
