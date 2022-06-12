import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupperadminComponent } from './supperadmin.component';

describe('SupperadminComponent', () => {
  let component: SupperadminComponent;
  let fixture: ComponentFixture<SupperadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupperadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupperadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
