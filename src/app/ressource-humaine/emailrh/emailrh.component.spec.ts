import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailrhComponent } from './emailrh.component';

describe('EmailrhComponent', () => {
  let component: EmailrhComponent;
  let fixture: ComponentFixture<EmailrhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailrhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
