import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutcnfrComponent } from './ajoutcnfr.component';

describe('AjoutcnfrComponent', () => {
  let component: AjoutcnfrComponent;
  let fixture: ComponentFixture<AjoutcnfrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutcnfrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutcnfrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
