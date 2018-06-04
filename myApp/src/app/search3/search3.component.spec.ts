import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Search3Component } from './search3.component';
import { RouterTestingModule } from '@angular/router/testing'
import { HttpModule, Connection, ConnectionBackend } from '@angular/http';
import { DataService } from '../data.service';
 

describe('Search3Component', () => {
  let component: Search3Component;
  let fixture: ComponentFixture<Search3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
    ],
      providers: [ ConnectionBackend , HttpModule, DataService],
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
