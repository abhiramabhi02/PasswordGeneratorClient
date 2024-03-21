import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordTableComponent } from './password-table.component';

describe('PasswordTableComponent', () => {
  let component: PasswordTableComponent;
  let fixture: ComponentFixture<PasswordTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordTableComponent]
    });
    fixture = TestBed.createComponent(PasswordTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
