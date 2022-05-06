import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormDesignComponent } from './custom-form-design.component';

describe('CustomFormDesignComponent', () => {
  let component: CustomFormDesignComponent;
  let fixture: ComponentFixture<CustomFormDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomFormDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFormDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
