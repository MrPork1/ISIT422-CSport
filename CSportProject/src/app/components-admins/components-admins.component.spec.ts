import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsAdminsComponent } from './components-admins.component';

describe('ComponentsAdminsComponent', () => {
  let component: ComponentsAdminsComponent;
  let fixture: ComponentFixture<ComponentsAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsAdminsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
