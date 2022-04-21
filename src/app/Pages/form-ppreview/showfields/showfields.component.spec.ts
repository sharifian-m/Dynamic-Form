import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowfieldsComponent } from './showfields.component';

describe('ShowfieldsComponent', () => {
  let component: ShowfieldsComponent;
  let fixture: ComponentFixture<ShowfieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowfieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowfieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
