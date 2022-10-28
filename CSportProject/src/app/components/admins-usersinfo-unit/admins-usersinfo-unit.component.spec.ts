import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsUsersinfoUnitComponent } from './admins-usersinfo-unit.component';

describe('AdminsUsersinfoUnitComponent', () => {
  let component: AdminsUsersinfoUnitComponent;
  let fixture: ComponentFixture<AdminsUsersinfoUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsUsersinfoUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsUsersinfoUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
