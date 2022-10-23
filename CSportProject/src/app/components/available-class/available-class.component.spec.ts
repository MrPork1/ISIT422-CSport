import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableClassComponent } from './available-class.component';

describe('AvailableClassComponent', () => {
  let component: AvailableClassComponent;
  let fixture: ComponentFixture<AvailableClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
