import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCfComponent } from './admin-cf.component';

describe('AdminCfComponent', () => {
  let component: AdminCfComponent;
  let fixture: ComponentFixture<AdminCfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
