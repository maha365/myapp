import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFormateurComponent } from './crud-formateur.component';

describe('CrudFormateurComponent', () => {
  let component: CrudFormateurComponent;
  let fixture: ComponentFixture<CrudFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudFormateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
