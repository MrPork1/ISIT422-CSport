import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsUsersinfoComponent } from './admins-usersinfo.component';

describe('AdminsUsersinfoComponent', () => {
  let component: AdminsUsersinfoComponent;
  let fixture: ComponentFixture<AdminsUsersinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsUsersinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsUsersinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
