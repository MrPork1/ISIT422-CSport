import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsClassinformationComponent } from './admins-classinformation.component';

describe('AdminsClassinformationComponent', () => {
  let component: AdminsClassinformationComponent;
  let fixture: ComponentFixture<AdminsClassinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsClassinformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsClassinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
