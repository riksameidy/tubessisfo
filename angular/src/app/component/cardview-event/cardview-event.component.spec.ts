import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardviewEventComponent } from './cardview-event.component';

describe('CardviewEventComponent', () => {
  let component: CardviewEventComponent;
  let fixture: ComponentFixture<CardviewEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardviewEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardviewEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
