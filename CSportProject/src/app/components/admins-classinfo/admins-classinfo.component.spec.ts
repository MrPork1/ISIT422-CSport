import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsClassinfoComponent } from './admins-classinfo.component';

describe('AdminsClassinfoComponent', () => {
  let component: AdminsClassinfoComponent;
  let fixture: ComponentFixture<AdminsClassinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsClassinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsClassinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
