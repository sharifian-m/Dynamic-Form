import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectformFieldsComponent } from './selectform-fields.component';

describe('SelectformFieldsComponent', () => {
  let component: SelectformFieldsComponent;
  let fixture: ComponentFixture<SelectformFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectformFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectformFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
