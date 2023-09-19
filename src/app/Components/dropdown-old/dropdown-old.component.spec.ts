import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownOldComponent } from './dropdown-old.component';

describe('DropdownOldComponent', () => {
  let component: DropdownOldComponent;
  let fixture: ComponentFixture<DropdownOldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownOldComponent]
    });
    fixture = TestBed.createComponent(DropdownOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
