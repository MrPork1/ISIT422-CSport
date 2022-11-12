import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAvaliableClassListComponent } from './admin-avaliable-class-list.component';

describe('AdminAvaliableClassListComponent', () => {
  let component: AdminAvaliableClassListComponent;
  let fixture: ComponentFixture<AdminAvaliableClassListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAvaliableClassListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAvaliableClassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
