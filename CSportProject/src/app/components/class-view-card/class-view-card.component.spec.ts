import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassViewCardComponent } from './class-view-card.component';

describe('ClassViewCardComponent', () => {
  let component: ClassViewCardComponent;
  let fixture: ComponentFixture<ClassViewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassViewCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
