import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Search3Component } from './search3.component';

describe('Search3Component', () => {
  let component: Search3Component;
  let fixture: ComponentFixture<Search3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Search3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Search3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
