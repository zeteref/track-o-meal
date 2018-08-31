import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbootstrapExampleComponent } from './ngbootstrap-example.component';

describe('NgbootstrapExampleComponent', () => {
  let component: NgbootstrapExampleComponent;
  let fixture: ComponentFixture<NgbootstrapExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbootstrapExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbootstrapExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
