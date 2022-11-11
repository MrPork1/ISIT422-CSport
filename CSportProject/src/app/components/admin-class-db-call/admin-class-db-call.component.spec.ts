import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClassDbCallComponent } from './admin-class-db-call.component';

describe('AdminClassDbCallComponent', () => {
  let component: AdminClassDbCallComponent;
  let fixture: ComponentFixture<AdminClassDbCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminClassDbCallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminClassDbCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
