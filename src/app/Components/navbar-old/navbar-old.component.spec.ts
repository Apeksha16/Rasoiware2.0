import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOldComponent } from './navbar-old.component';

describe('NavbarOldComponent', () => {
  let component: NavbarOldComponent;
  let fixture: ComponentFixture<NavbarOldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarOldComponent]
    });
    fixture = TestBed.createComponent(NavbarOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
