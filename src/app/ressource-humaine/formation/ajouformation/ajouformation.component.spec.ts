import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouformationComponent } from './ajouformation.component';

describe('AjouformationComponent', () => {
  let component: AjouformationComponent;
  let fixture: ComponentFixture<AjouformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
