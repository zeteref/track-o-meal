import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealSearchComponent } from './meal-search.component';

describe('MealSearchComponent', () => {
  let component: MealSearchComponent;
  let fixture: ComponentFixture<MealSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
