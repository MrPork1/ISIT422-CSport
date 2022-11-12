import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditUsershowsComponent } from './admin-edit-usershows.component';

describe('AdminEditUsershowsComponent', () => {
  let component: AdminEditUsershowsComponent;
  let fixture: ComponentFixture<AdminEditUsershowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditUsershowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditUsershowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
