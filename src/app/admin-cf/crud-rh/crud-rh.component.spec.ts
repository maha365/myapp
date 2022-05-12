import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudRHComponent } from './crud-rh.component';

describe('CrudRHComponent', () => {
  let component: CrudRHComponent;
  let fixture: ComponentFixture<CrudRHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudRHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
