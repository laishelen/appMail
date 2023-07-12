import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMailComponent } from './app-mail.component';

describe('AppMailComponent', () => {
  let component: AppMailComponent;
  let fixture: ComponentFixture<AppMailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppMailComponent]
    });
    fixture = TestBed.createComponent(AppMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
