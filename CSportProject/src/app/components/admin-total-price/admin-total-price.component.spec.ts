import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTotalPriceComponent } from './admin-total-price.component';

describe('AdminTotalPriceComponent', () => {
  let component: AdminTotalPriceComponent;
  let fixture: ComponentFixture<AdminTotalPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTotalPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTotalPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
