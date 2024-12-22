import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratonComponent } from './registraton.component';

describe('RegistratonComponent', () => {
  let component: RegistratonComponent;
  let fixture: ComponentFixture<RegistratonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistratonComponent]
    });
    fixture = TestBed.createComponent(RegistratonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
