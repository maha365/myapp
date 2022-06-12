import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecfComponent } from './updatecf.component';

describe('UpdatecfComponent', () => {
  let component: UpdatecfComponent;
  let fixture: ComponentFixture<UpdatecfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
