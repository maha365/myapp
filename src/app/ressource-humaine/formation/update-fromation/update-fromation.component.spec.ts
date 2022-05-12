import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFromationComponent } from './update-fromation.component';

describe('UpdateFromationComponent', () => {
  let component: UpdateFromationComponent;
  let fixture: ComponentFixture<UpdateFromationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFromationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFromationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
