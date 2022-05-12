import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutRhComponent } from './ajout-rh.component';

describe('AjoutRhComponent', () => {
  let component: AjoutRhComponent;
  let fixture: ComponentFixture<AjoutRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutRhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
