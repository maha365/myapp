import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEtudComponent } from './crud-etud.component';

describe('CrudEtudComponent', () => {
  let component: CrudEtudComponent;
  let fixture: ComponentFixture<CrudEtudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudEtudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudEtudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
