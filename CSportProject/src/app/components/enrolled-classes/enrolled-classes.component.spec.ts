import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledClassesComponent } from './enrolled-classes.component';

describe('EnrolledClassesComponent', () => {
  let component: EnrolledClassesComponent;
  let fixture: ComponentFixture<EnrolledClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrolledClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrolledClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
