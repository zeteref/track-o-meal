import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeheadBasicComponent } from './typehead-basic.component';

describe('TypeheadBasicComponent', () => {
  let component: TypeheadBasicComponent;
  let fixture: ComponentFixture<TypeheadBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeheadBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeheadBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
