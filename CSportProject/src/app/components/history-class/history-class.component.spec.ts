import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryClassComponent } from './history-class.component';

describe('HistoryClassComponent', () => {
  let component: HistoryClassComponent;
  let fixture: ComponentFixture<HistoryClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
